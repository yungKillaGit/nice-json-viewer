import { JsonViewer } from './json-viewer';

const initialJsonText = JSON.stringify({
  name: 'Nice JSON Viewer',
  version: '1.0.0',
  items: [1, 2, 3],
  description: 'A simple JSON viewer built with React and TypeScript.',
  booleanExample: true,
});

export function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-black py-8">
      <main className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">JSON Viewer</h1>
          </div>

          <JsonViewer initialText={initialJsonText} />
        </div>
      </main>
    </div>
  );
}
