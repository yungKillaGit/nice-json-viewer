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
    <div className="flex max-h-[80vh] min-h-[80vh] flex-col gap-4">
      <div className="flex min-h-0 flex-1 flex-col gap-4 md:flex-row">
        <div className="min-h-0 flex-1">
          <JsonInput value={text} onChange={(v: string) => setText(v)} />
        </div>
        <div className="min-h-0 flex-1">
          <JsonOutput data={data} />
        </div>
      </div>
      <div className="min-h-6">{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
