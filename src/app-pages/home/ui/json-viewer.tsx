'use client';
import { debounce } from 'lodash-es';
import { useEffect, useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
import { parseJson } from '../lib/parse-json';
import { prettifyJson } from '../lib/prettify-json';
import { jsonDataStorageKey, useSyncInput } from '../model/use-sync-input';
import { ExportJsonButton } from './export-json-button';
import { ImportJsonButton } from './import-json-button';
import { JsonInput } from './json-input';
import { JsonOutput } from './json-output';
import styles from './json-viewer.module.css';

interface Props {
  initialText?: string;
}

const initializeInputValue = (initialText?: string) => {
  if (initialText) {
    return initialText;
  }

  const storedJson = localStorage.getItem(jsonDataStorageKey);
  if (storedJson) {
    return prettifyJson(JSON.parse(storedJson));
  }

  return undefined;
};

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

  useEffect(() => {
    setText(initializeInputValue(initialText));
  }, [initialText]);

  return (
    <div className="h-full">
      <div className="flex h-full flex-col gap-4 lg:flex-row">
        <div className={styles.pageSection}>
          <ImportJsonButton onLoad={handleImportJson} />
          <JsonInput value={text} onChange={handleJsonInputChange} />
        </div>
        <div className={styles.pageSection}>
          <ExportJsonButton text={text} disabled={Boolean(!text || error)} />
          <JsonOutput data={data} />
        </div>
      </div>
      <div>{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
