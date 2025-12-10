export function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center bg-linear-to-b from-slate-900 to-black p-5 md:p-10">
      <div className="container rounded-2xl border border-slate-700 bg-slate-800/70 p-5 pb-0 shadow-lg backdrop-blur md:p-10">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">JSON Viewer</h1>
        </div>

        {children}
      </div>
    </div>
  );
}
