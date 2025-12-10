'use client';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { useId } from 'react';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { ScrollArea } from '~/shadcn/ui/scroll-area';

interface JsonOutputProps {
  data?: unknown;
}

export function JsonOutput({ data }: JsonOutputProps) {
  const inputId = useId();
  return (
    <Field className="flex h-full min-h-0 flex-col">
      <FieldLabel htmlFor={inputId}>Output JSON</FieldLabel>
      <ScrollArea className="border-input h-full max-h-full min-h-[120px] flex-1 rounded-md border">
        <div className="h-full max-h-full min-h-[120px]">
          {data ? (
            <JsonView
              value={data}
              style={darkTheme}
              className="h-full max-h-full px-3 py-2"
              id={inputId}
              displayDataTypes={false}
              shortenTextAfterLength={0}
            />
          ) : (
            <pre className="h-full max-h-full px-3 py-2 text-sm whitespace-pre-wrap text-gray-300">
              Paste valid JSON to render it here.
            </pre>
          )}
        </div>
      </ScrollArea>
    </Field>
  );
}
