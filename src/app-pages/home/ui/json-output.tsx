'use client';
import clsx from 'clsx';
import { useId } from 'react';
import { darkStyles, JsonView } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { ScrollArea } from '~/shadcn/ui/scroll-area';
import { isPrimitive } from '../lib/is-primitive';
import { prettifyJson } from '../lib/prettify-json';
import styles from './json-viewer.module.css';

interface JsonOutputProps {
  data?: unknown;
}

const jsonViewTheme = {
  ...darkStyles,
  container: clsx(darkStyles.container, 'h-full bg-input/30!'),
};

export function JsonOutput({ data }: JsonOutputProps) {
  const inputId = useId();

  return (
    <Field className={styles.field}>
      <FieldLabel htmlFor={inputId}>Output JSON</FieldLabel>
      <ScrollArea className={clsx(styles.scrollableArea, 'border-input rounded-md border')}>
        <div className="h-full">
          {data === undefined ? (
            <div className="p-4 break-normal">Paste valid JSON to render it here.</div>
          ) : isPrimitive(data) ? (
            <div
              className="h-full p-4 break-normal"
              style={
                {
                  // background: darkTheme['--w-rjv-background-color'],
                }
              }
            >
              {prettifyJson(data)}
            </div>
          ) : (
            <JsonView data={data} style={jsonViewTheme} />
          )}
        </div>
      </ScrollArea>
    </Field>
  );
}
