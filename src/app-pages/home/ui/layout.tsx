export function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col justify-center bg-gray-900 p-4">
      <div className="container mx-auto flex h-full flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg">
        <h1 className="text-white">JSON Viewer</h1>
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
