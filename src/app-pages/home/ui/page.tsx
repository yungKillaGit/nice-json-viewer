import { JsonViewer } from './json-viewer';

const initialJsonText = JSON.stringify({
  name: 'Nice JSON Viewer',
  version: '1.0.0',
  items: [1, 2, 3],
  description: 'A simple JSON viewer built with React and TypeScript.',
  booleanExample: true,
});

export function HomePage() {
  return <JsonViewer initialText={initialJsonText} />;
}
