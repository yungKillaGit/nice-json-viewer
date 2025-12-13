export function parseJson(text: string | undefined): { data?: unknown; error?: string } {
  try {
    if (text === undefined || text.trim() === '') {
      return {};
    }
    const parsed = JSON.parse(text);
    return { data: parsed };
  } catch (error_: unknown) {
    const message = (error_ as Error)?.message || 'Invalid JSON';
    return { error: message };
  }
}
