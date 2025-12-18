'use client';
import clsx from 'clsx';
import { useId } from 'react';
import { darkStyles, JsonView } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { Field, FieldLabel } from '~/shadcn/ui/field';
import { ScrollArea } from '~/shadcn/ui/scroll-area';
import { Skeleton } from '~/shadcn/ui/skeleton';
import { isPrimitive } from '../lib/is-primitive';
import { prettifyJson } from '../lib/prettify-json';
import styles from './json-viewer.module.css';

interface JsonOutputProps {
  data?: unknown;
  busy?: boolean;
}

const jsonViewTheme = {
  ...darkStyles,
  container: clsx(darkStyles.container, 'h-full bg-input/30!'),
};

export function JsonOutput({ data, busy }: JsonOutputProps) {
  const inputId = useId();

  return (
    <Field className={styles.field}>
      <FieldLabel htmlFor={inputId}>Output JSON</FieldLabel>
      <ScrollArea className={clsx(styles.scrollableArea, 'border-input rounded-md border')}>
        {busy ? (
          <Skeleton className="bg-input/30 h-full" />
        ) : (
          <div className="h-full" id={inputId}>
            {data === undefined ? (
              <div className="px-3 py-2 break-normal">Paste valid JSON to render it here.</div>
            ) : isPrimitive(data) ? (
              <div className="h-full px-3 py-2">{prettifyJson(data)}</div>
            ) : (
              <JsonView data={data} style={jsonViewTheme} />
            )}
          </div>
        )}
      </ScrollArea>
    </Field>
  );
}
