export function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-black py-8">
      <main className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">JSON Viewer</h1>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}
