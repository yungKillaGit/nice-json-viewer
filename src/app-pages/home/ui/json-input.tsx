import { ChangeEvent, useId } from 'react';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { ScrollArea } from '~/shadcn/ui/scroll-area';
import { Textarea } from '~/shadcn/ui/textarea';
import styles from './json-viewer.module.css';

interface JsonInputProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export function JsonInput({ value, onChange }: JsonInputProps) {
  const handleChange = (event_: ChangeEvent<HTMLTextAreaElement>) => onChange(event_.target.value);
  const inputId = useId();

  return (
    <Field className={styles.field}>
      <FieldLabel htmlFor={inputId}>Input JSON</FieldLabel>
      <ScrollArea className={styles.scrollableArea}>
        <Textarea id={inputId} value={value} onChange={handleChange} className="h-full" />
      </ScrollArea>
    </Field>
  );
}
