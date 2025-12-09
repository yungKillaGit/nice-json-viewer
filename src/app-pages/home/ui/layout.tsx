export function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-linear-to-b from-slate-900 to-black">
      <main className="container mx-auto px-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-10 pb-0 shadow-lg backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">JSON Viewer</h1>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}
