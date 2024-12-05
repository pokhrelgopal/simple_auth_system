import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};
export default function SignupPage() {
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
          <SignupForm />
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
