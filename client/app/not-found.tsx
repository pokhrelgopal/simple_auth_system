import Button from "@/components/Button";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image alt="404" height={300} width={300} src="/404.svg" />
        <h1 className="text-3xl font-bold mt-3">Page Not Found</h1>
        <p className="max-w-2xl text-center mt-3">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="mt-5">
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
