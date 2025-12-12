export function parseJson(text: string): { data?: unknown; error?: string } {
  try {
    const parsed = JSON.parse(text);
    return { data: parsed };
  } catch (error_: unknown) {
    const message = (error_ as Error)?.message || 'Invalid JSON';
    return { error: message };
  }
}
