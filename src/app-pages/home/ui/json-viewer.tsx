'use client';
import { useMemo, useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
import { JsonInput } from './json-input';
import { JsonOutput } from './json-output';
import { initialJsonString } from '../lib/constants';

interface Props {
  initialText?: string;
}

export function JsonViewer({ initialText = initialJsonString }: Props) {
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
    <div>
      <div className="flex h-[70vh] flex-col gap-4 md:flex-row">
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <JsonInput value={text} onChange={(v: string) => setText(v)} />
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <JsonOutput data={data} />
        </div>
      </div>
      <div className="mt-2 min-h-6">{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
