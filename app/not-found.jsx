"use client";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-2xl text-gray-700 mb-8">Something went wrong.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
      <button type="button" onClick={() => router.push("/")}>
        HOME PAGE
      </button>
    </div>
  );
}
