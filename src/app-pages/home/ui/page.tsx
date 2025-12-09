import { initialJson } from '../lib/constants';
import { JsonViewer } from './json-viewer';

const initialJsonText = JSON.stringify(initialJson, null, 2);

export function HomePage() {
  return <JsonViewer initialText={initialJsonText} />;
}
