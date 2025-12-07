'use client';
import { useMemo, useState } from 'react';
import { JsonInput } from './json-input';
import { JsonOutput } from './json-output';

interface Props {
  initialText?: string;
}

export function JsonViewer({ initialText = '{}' }: Props) {
  const [text, setText] = useState<string>(initialText);

  const { data, error } = useMemo(() => {
    try {
      const parsed = JSON.parse(text);
      return { data: parsed as unknown, error: undefined as string | undefined };
    } catch (error_: unknown) {
      const message = (error_ as Error)?.message ?? 'Invalid JSON';
      return { data: undefined as unknown | undefined, error: message };
    }
  }, [text]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <JsonInput value={text} onChange={(v: string) => setText(v)} error={error} rows={18} />
      <JsonOutput data={data} />
    </div>
  );
}
