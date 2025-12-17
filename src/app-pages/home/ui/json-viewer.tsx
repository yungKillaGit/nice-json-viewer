'use client';
import Cookies from 'js-cookie';
import { debounce } from 'lodash-es';
import { useEffect, useState } from 'react';
import { FieldError } from '~/shadcn/ui/field';
import { useEffectOnce } from '~/shared/lib/use-effect-once';
import { hasStoredDataCookieKey } from '../lib/constants';
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
  wait?: boolean;
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

export function JsonViewer({ initialText, wait }: Props) {
  const [text, setText] = useState<string | undefined>(initialText);
  const { data, error } = parseJson(text);
  const { syncInput } = useSyncInput();
  const debouncedSyncInput = debounce(syncInput, 300);
  const [isLoading, setIsLoading] = useState(wait);

  const handleJsonInputChange = (value: string) => {
    setText(value);
    debouncedSyncInput(value);
  };

  const handleImportJson = (content: string) => {
    setText(content);
    syncInput(content);
  };

  useEffectOnce(() => {
    const value = initializeInputValue(initialText);
    setIsLoading(false);
    setText(value);
  });

  useEffect(() => {
    const shouldDeleteCookie = Cookies.get(hasStoredDataCookieKey) && initialText !== undefined;
    if (shouldDeleteCookie) {
      Cookies.remove(hasStoredDataCookieKey);
    }
  }, [initialText]);

  return (
    <div className="h-full">
      <div className="flex h-full flex-col gap-4 lg:flex-row">
        <div className={styles.pageSection}>
          <ImportJsonButton onLoad={handleImportJson} />
          <JsonInput value={text} onChange={handleJsonInputChange} busy={isLoading} />
        </div>
        <div className={styles.pageSection}>
          <ExportJsonButton text={text} disabled={Boolean(!text || error)} />
          <JsonOutput data={data} busy={isLoading} />
        </div>
      </div>
      <div>{error && <FieldError errors={[{ message: error }]} />}</div>
    </div>
  );
}
