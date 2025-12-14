import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSyncInput } from './use-sync-input';

const mockReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    replace: mockReplace,
  })),
  useSearchParams: vi.fn(() => ({
    toString: vi.fn(() => ''),
  })),
}));

describe('useSyncInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should replace URL with query string when JSON is valid', () => {
    const validData = { key: 'value' };
    const encodedData = encodeURIComponent(JSON.stringify(validData));
    const { result } = renderHook(() => useSyncInput());
    result.current.syncInput(JSON.stringify(validData));
    expect(mockReplace).toHaveBeenCalledWith(`?json=${encodedData}`);
  });

  it('should reset URL if JSON is invalid', () => {
    const { result } = renderHook(() => useSyncInput());
    result.current.syncInput('{invalid json');
    expect(mockReplace).toHaveBeenCalledWith(globalThis.location.pathname);
  });

  it('should handle array data correctly', () => {
    const arrayData = [1, 2, 3];
    const encodedData = encodeURIComponent(JSON.stringify(arrayData));
    const { result } = renderHook(() => useSyncInput());
    result.current.syncInput(JSON.stringify(arrayData));
    expect(mockReplace).toHaveBeenCalledWith(`?json=${encodedData}`);
  });

  it('should handle nested object data correctly', () => {
    const nestedData = { outer: { inner: 'value' }, arr: [1, 2] };
    const encodedData = encodeURIComponent(JSON.stringify(nestedData));
    const { result } = renderHook(() => useSyncInput());
    result.current.syncInput(JSON.stringify(nestedData));
    expect(mockReplace).toHaveBeenCalledWith(`?json=${encodedData}`);
  });

  it('should handle empty object correctly', () => {
    const emptyObject = {};
    const encodedData = encodeURIComponent(JSON.stringify(emptyObject));
    const { result } = renderHook(() => useSyncInput());
    result.current.syncInput(JSON.stringify(emptyObject));
    expect(mockReplace).toHaveBeenCalledWith(`?json=${encodedData}`);
  });
});
