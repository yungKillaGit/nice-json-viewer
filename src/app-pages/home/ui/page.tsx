import { cookies } from 'next/headers';
import { hasStoredDataCookieKey } from '../lib/constants';
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
    const { data, error } = parseJson(json);
    if (!error) {
      initialText = prettifyJson(data);
    }
  }

  const cookieStore = await cookies();
  const hasStoredData = cookieStore.get(hasStoredDataCookieKey);
  const wait = Boolean(initialText === undefined && hasStoredData);

  return <JsonViewer initialText={initialText} wait={wait} />;
}
