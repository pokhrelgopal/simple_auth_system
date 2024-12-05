import Button from "@/components/Button";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public",
};
const PublicPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Public Page
          </h1>
          <p className="text-md md:text-xl font-semibold text-blue-600 mb-8 max-w-2xl">
            This is a public page and it can be accessed without being
            authenticated. Explore our amazing features!
          </p>
          <div className="space-x-4">
            <Button variant="primary" className="rounded-lg">
              Explore Features
            </Button>
            <Button variant="secondary" className="rounded-lg bg-gray-400">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <p className="text-xl font-semibold text-center text-gray-700">
          Sorry about the lack of content here. This is just a placeholder page.
        </p>
      </div>
    </div>
  );
};

export default PublicPage;
