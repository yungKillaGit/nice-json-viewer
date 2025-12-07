'use client';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';

interface JsonOutputProps {
  data?: unknown;
}

export function JsonOutput({ data }: JsonOutputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-gray-300">Rendered JSON</label>
      <div className="overflow-auto rounded-md border border-slate-700 bg-slate-900/40 p-3">
        {data ? (
          <JsonView value={data} style={darkTheme} />
        ) : (
          <pre className="text-sm whitespace-pre-wrap text-gray-300">
            Paste valid JSON to render it here.
          </pre>
        )}
      </div>
    </div>
  );
}
