'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '~/shared/lib/use-query-params';
import { hasStoredDataCookieKey } from '../lib/constants';
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
      Cookies.remove(hasStoredDataCookieKey);
      router.replace(globalThis.location.pathname);
    } else {
      const jsonString = JSON.stringify(data);

      if (jsonString.length > maxUrlLength) {
        localStorage.setItem(jsonDataStorageKey, jsonString);
        Cookies.set(hasStoredDataCookieKey, '1');
        router.replace(globalThis.location.pathname);
      } else {
        router.replace('?' + createQueryString('json', jsonString));
      }
    }
  };

  return { syncInput };
};
