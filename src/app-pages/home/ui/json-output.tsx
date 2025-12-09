'use client';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { useId } from 'react';
import { Field, FieldLabel } from '~/shadcn/ui/field';

interface JsonOutputProps {
  data?: unknown;
}

export function JsonOutput({ data }: JsonOutputProps) {
  const inputId = useId();
  return (
    <Field className="flex h-full flex-col">
      <FieldLabel htmlFor={inputId}>Output JSON</FieldLabel>
      <div className="border-input min-h-0 flex-1 overflow-auto rounded-md border">
        {data ? (
          <JsonView
            value={data}
            style={darkTheme}
            className="h-full px-3 py-2"
            id={inputId}
            displayDataTypes={false}
          />
        ) : (
          <pre className="px-3 py-2 text-sm whitespace-pre-wrap text-gray-300">
            Paste valid JSON to render it here.
          </pre>
        )}
      </div>
    </Field>
  );
}
