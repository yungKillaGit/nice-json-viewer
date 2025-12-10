import { describe, expect, it } from 'vitest';
import { parseJson } from './parse-json';

const mockObject = { a: 1 };
const mockArray = [1, 2, 3];
const mockString = 'hello';
const invalidJson = '{a:1}';
const emptyJson = '';

describe('parseJson', () => {
  it('returns error for unquoted string', () => {
    const result = parseJson('hello');
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });

  it('returns error for trailing comma in array', () => {
    const result = parseJson('[1,2,3,]');
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });

  it('returns error for unquoted key in object', () => {
    const result = parseJson('{a:1}');
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });

  it('returns error for empty object braces', () => {
    const result = parseJson('{,}');
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });

  it('returns error for incomplete array', () => {
    const result = parseJson('[1,2');
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });
  it('parses valid JSON object', () => {
    const result = parseJson(JSON.stringify(mockObject));
    expect(result.data).toEqual(mockObject);
    expect(result.error).toBeUndefined();
  });

  it('parses valid JSON array', () => {
    const result = parseJson(JSON.stringify(mockArray));
    expect(result.data).toEqual(mockArray);
    expect(result.error).toBeUndefined();
  });

  it('parses valid JSON string', () => {
    const result = parseJson(JSON.stringify(mockString));
    expect(result.data).toBe(mockString);
    expect(result.error).toBeUndefined();
  });

  it('returns error for invalid JSON', () => {
    const result = parseJson(invalidJson);
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });

  it('returns error for empty string', () => {
    const result = parseJson(emptyJson);
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
  });
});
