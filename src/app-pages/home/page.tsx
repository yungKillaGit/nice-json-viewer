import Link from 'next/link';

export function HomePage() {
  return (
    <div className="flex min-h-screen items-center bg-gradient-to-b from-slate-900 to-black">
      <main className="mx-auto w-full max-w-3xl p-8">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-8 shadow-lg backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-4xl font-extrabold tracking-tight">Hello, world!</h1>
            <Link href="#" className="text-sm text-sky-400">
              Docs
            </Link>
          </div>

          <p className="mb-6 text-gray-300">
            A small demo page using Tailwind and a shadcn-style Badge component.
          </p>

          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
              Get started
            </button>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2"
            >
              Learn more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
