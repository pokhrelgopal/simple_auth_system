"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import { fetchUserProfile } from "@/utils/api";

export default function ProfilePage() {
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null; // The middleware will handle the redirect
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="mb-8">
        <p className="text-xl">Welcome, {user.username}!</p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
      <Link href="/" passHref>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
