'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useQueryParams } from '~/shared/lib/use-query-params';
import { parseJson } from '../lib/parse-json';

export const useSyncInput = () => {
  const router = useRouter();
  const { createQueryString, searchParams } = useQueryParams();

  const syncInput = useCallback(
    (inputJson: string) => {
      const { data, error } = parseJson(inputJson);
      if (error) {
        if (searchParams.has('json')) {
          router.replace(globalThis.location.pathname);
        }
      } else {
        const encoded = encodeURIComponent(JSON.stringify(data));
        router.replace('?' + createQueryString('json', encoded));
      }
    },
    [createQueryString, router, searchParams]
  );

  return { syncInput };
};
