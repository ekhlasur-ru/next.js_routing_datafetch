"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h2>
      
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => windows.location.reload()}
      >
        Refresh
      </button>

      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        href={"/"}
      >
        Go Back To Home Page
      </Link>
    </div>
  );
}
