import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-zinc-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or may
        have been moved.
      </p>

      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}