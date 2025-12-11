import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#c7d2fe] text-center dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0a0a0a]">
      <h1 className="mb-4 text-6xl font-extrabold text-indigo-600 drop-shadow dark:text-indigo-400">
        404
      </h1>
      <h2 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-gray-200">
        Page Not Found
      </h2>
      <p className="mb-8 text-xl text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white shadow-md transition-colors hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Back to Home
      </Link>
    </div>
  );
}
