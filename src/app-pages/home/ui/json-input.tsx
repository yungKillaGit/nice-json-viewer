import { ChangeEvent } from 'react';
import { Textarea } from '~/shadcn/ui/textarea';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  rows?: number;
}

export function JsonInput({ value, onChange, error, rows = 18 }: JsonInputProps) {
  const handleChange = (event_: ChangeEvent<HTMLTextAreaElement>) => onChange(event_.target.value);

  return (
    <div>
      <label className="mb-2 block text-sm text-gray-300">Input JSON</label>
      <Textarea value={value} onChange={handleChange} rows={rows} className="font-mono text-sm" />
      {error && <p className="mt-2 text-sm text-red-400">Error: {error}</p>}
    </div>
  );
}
