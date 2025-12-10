export function parseJson(text: string): { data: unknown | undefined; error: string | undefined } {
  try {
    const parsed = JSON.parse(text);
    return { data: parsed, error: undefined };
  } catch (error_: unknown) {
    const message = (error_ as Error)?.message ?? 'Invalid JSON';
    return { data: undefined, error: message };
  }
}
