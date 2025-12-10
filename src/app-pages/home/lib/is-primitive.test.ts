import { describe, expect, it } from 'vitest';
import { isPrimitive } from './is-primitive';

describe('isPrimitive', () => {
  it('returns true for null', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  it('returns true for string', () => {
    expect(isPrimitive('test')).toBe(true);
  });

  it('returns true for number', () => {
    expect(isPrimitive(123)).toBe(true);
    expect(isPrimitive(-1.5)).toBe(true);
    expect(isPrimitive(Number.NaN)).toBe(true);
    expect(isPrimitive(Infinity)).toBe(true);
  });

  it('returns true for boolean', () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
  });

  it('returns false for object', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(new Date())).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isPrimitive(undefined)).toBe(false);
  });

  it('returns false for function', () => {
    expect(isPrimitive(() => {})).toBe(false);
  });
});
