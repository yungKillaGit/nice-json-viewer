import { useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  return { searchParams, createQueryString };
};
