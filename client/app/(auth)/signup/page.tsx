"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { signupUser } from "@/utils/api";
import ErrorAlert from "@/components/ErrorAlert";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signupUser(username, email, password);
      router.push("/login");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 bg-blue-900 items-center justify-center">
        {/* We can add any image or any other component here */}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <Link href="/">
            <div className="mb-8 flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
              <span>Back Home</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-8">
            Create an account to get started.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full rounded-sm border-gray-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-sm border-gray-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-sm border-gray-300"
              />
            </div>
            {error && <ErrorAlert error={error} />}
            <Button type="submit" className="w-full" isLoading={isLoading}>
              Sign Up
            </Button>
          </form>
          <div className="mt-6 text-center text-gray-600">
            <p>Already have an account?</p>
            <Link href="/login" className="text-blue-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
