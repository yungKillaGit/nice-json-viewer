'use client';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '~/shared/lib/use-query-params';
import { parseJson } from '../lib/parse-json';

export const useSyncInput = () => {
  const router = useRouter();
  const { createQueryString, searchParams } = useQueryParams();

  const syncInput = (inputJson: string) => {
    const { data, error } = parseJson(inputJson);
    if (error) {
      if (searchParams.has('json')) {
        router.replace(globalThis.location.pathname);
      }
    } else {
      const encoded = encodeURIComponent(JSON.stringify(data));
      router.replace('?' + createQueryString('json', encoded));
    }
  };

  return { syncInput };
};
