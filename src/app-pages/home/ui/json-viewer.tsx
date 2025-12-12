'use client';
import { useMemo, useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
import { initialJsonString } from '../lib/constants';
import { parseJson } from '../lib/parse-json';
import { useSyncInput } from '../model/use-sync-input';
import { JsonInput } from './json-input';
import { JsonOutput } from './json-output';

interface Props {
  initialText?: string;
}

export function JsonViewer({ initialText = initialJsonString }: Props) {
  const [text, setText] = useState<string>(initialText);
  const { data, error } = useMemo(() => parseJson(text), [text]);
  const { syncInput } = useSyncInput();

  const handleJsonInputChange = (value: string) => {
    setText(value);
    syncInput(value);
  };

  return (
    <div>
      <div className="flex h-[60vh] flex-col gap-4 md:flex-row xl:h-[70vh]">
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <JsonInput value={text} onChange={handleJsonInputChange} />
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <JsonOutput data={data} />
        </div>
      </div>
      <div className="mt-2 min-h-6">{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
