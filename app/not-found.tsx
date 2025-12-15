import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="mb-4 text-6xl font-extrabold text-gray-700 drop-shadow dark:text-gray-200">
        404
      </h1>
      <h2 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-gray-300">
        Page Not Found
      </h2>
      <p className="mb-8 text-xl text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-8 py-4 font-medium text-white shadow-md transition-colors hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
