import { parseJson } from '../lib/parse-json';
import { prettifyJson } from '../lib/prettify-json';
import { JsonViewer } from './json-viewer';

export async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Partial<{ json: string }>>;
}) {
  let initialText;
  const { json } = await searchParams;

  if (json) {
    const decodedJson = decodeURIComponent(json);
    const { data, error } = parseJson(decodedJson);
    if (!error) {
      initialText = prettifyJson(data);
    }
  }
  return <JsonViewer initialText={initialText} />;
}
