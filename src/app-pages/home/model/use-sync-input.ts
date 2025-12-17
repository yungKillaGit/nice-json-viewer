'use client';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '~/shared/lib/use-query-params';
import { parseJson } from '../lib/parse-json';

export const maxUrlLength = 2000;

export const jsonDataStorageKey = 'jsonData';

export const useSyncInput = () => {
  const router = useRouter();
  const { createQueryString } = useQueryParams();

  const syncInput = (inputJson: string) => {
    const { data, error } = parseJson(inputJson);

    if (error) {
      router.replace(globalThis.location.pathname);
    } else if (data === undefined) {
      localStorage.removeItem(jsonDataStorageKey);
      router.replace(globalThis.location.pathname);
    } else {
      const jsonString = JSON.stringify(data);

      if (jsonString.length > maxUrlLength) {
        localStorage.setItem(jsonDataStorageKey, jsonString);
        router.replace(globalThis.location.pathname);
      } else {
        router.replace('?' + createQueryString('json', jsonString));
      }
    }
  };

  return { syncInput };
};
