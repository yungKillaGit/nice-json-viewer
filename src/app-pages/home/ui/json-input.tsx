import { ChangeEvent, useId } from 'react';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { Textarea } from '~/shadcn/ui/textarea';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function JsonInput({ value, onChange }: JsonInputProps) {
  const handleChange = (event_: ChangeEvent<HTMLTextAreaElement>) => onChange(event_.target.value);
  const inputId = useId();

  return (
    <Field className="flex h-full flex-col">
      <FieldLabel htmlFor={inputId}>Input JSON</FieldLabel>
      <Textarea
        id={inputId}
        value={value}
        onChange={handleChange}
        className="min-h-0 flex-1 font-mono text-sm"
      />
    </Field>
  );
}
