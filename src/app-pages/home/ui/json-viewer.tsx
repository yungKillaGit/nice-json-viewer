'use client';
import { debounce } from 'lodash-es';
import { useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
import { parseJson } from '../lib/parse-json';
import { useSyncInput } from '../model/use-sync-input';
import { ExportJsonButton } from './export-json-button';
import { ImportJsonButton } from './import-json-button';
import { JsonInput } from './json-input';
import { JsonOutput } from './json-output';

interface Props {
  initialText?: string;
}

export function JsonViewer({ initialText }: Props) {
  const [text, setText] = useState<string | undefined>(initialText);
  const { data, error } = parseJson(text);
  const { syncInput } = useSyncInput();
  const debouncedSyncInput = debounce(syncInput, 300);

  const handleJsonInputChange = (value: string) => {
    setText(value);
    debouncedSyncInput(value);
  };

  const handleImportJson = (content: string) => {
    setText(content);
    syncInput(content);
  };

  return (
    <div>
      <div className="flex h-[60vh] flex-col gap-4 md:flex-row xl:h-[70vh]">
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <ImportJsonButton onLoad={handleImportJson} />
          <JsonInput value={text} onChange={handleJsonInputChange} />
        </div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">
          <ExportJsonButton text={text} disabled={Boolean(!text || error)} />
          <JsonOutput data={data} />
        </div>
      </div>
      <div className="mt-2 min-h-6">{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
