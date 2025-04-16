import React from "react";
import { Link } from "react-router";


export default function NotfoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  </div>
  )
}
