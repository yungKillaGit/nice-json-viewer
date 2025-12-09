import { ChangeEvent, useId } from 'react';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { ScrollArea } from '~/shadcn/ui/scroll-area';
import { Textarea } from '~/shadcn/ui/textarea';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function JsonInput({ value, onChange }: JsonInputProps) {
  const handleChange = (event_: ChangeEvent<HTMLTextAreaElement>) => onChange(event_.target.value);
  const inputId = useId();

  return (
    <Field className="flex h-full min-h-0 flex-col">
      <FieldLabel htmlFor={inputId}>Input JSON</FieldLabel>
      <ScrollArea className="min-h-0 flex-1">
        <Textarea id={inputId} value={value} onChange={handleChange} className="h-full" />
      </ScrollArea>
    </Field>
  );
}
