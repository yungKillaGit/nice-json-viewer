'use client';
import { useMemo, useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
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
    <div className="grid min-h-[80vh] grid-rows-[1fr_auto] gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <JsonInput value={text} onChange={(v: string) => setText(v)} />
        <JsonOutput data={data} />
      </div>

      <div className="min-h-6">
        {error && <FieldError errors={[{ message: error }]}></FieldError>}
      </div>
    </div>
  );
}
