import { isBoolean, isNull, isNumber, isString } from 'lodash-es';

export const isPrimitive = (value: unknown): value is string | number | boolean | null => {
  return isNull(value) || isString(value) || isNumber(value) || isBoolean(value);
};
