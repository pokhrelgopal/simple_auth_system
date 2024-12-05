import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
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
          <h1 className="text-3xl font-bold mb-2">Log In</h1>
          <p className="text-gray-600 mb-8">
            Enter your email and password to login to your account.
          </p>
          <LoginForm />
          <div className="mt-6 text-center text-gray-600">
            <p>Don't have an account?</p>
            <Link href="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
