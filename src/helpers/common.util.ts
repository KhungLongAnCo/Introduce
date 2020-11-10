import { AxiosError } from 'axios';
import { isNil, trim } from 'lodash';
import numeral from 'numeral';
import { COMMON } from '../constants/error';

type E = string | AxiosError;

export function getMessageFromError(error: E) {
  if (typeof error === 'string') {
    return error;
  }
  if (error.response) {
    return error?.response?.data?.message || COMMON;
  }
  return error.message || COMMON;
}

export function shallowTrim<T>(values: T): T {
  return Object.keys(values).reduce((acc, key) => {
    return { ...acc, [key]: trim(values[key] || '') };
  }, {}) as T;
}
export function deepTrim<T>(values: T): T {
  return Object.keys(values).reduce((acc, key) => {
    if (typeof values[key] === 'object') {
      return { ...acc, [key]: deepTrim(values[key]) };
    }
    return { ...acc, [key]: trim(values[key]) };
  }, {}) as T;
}

export function decodeToken(token: string) {
  try {
    const payload = token.split('.')[1];
    const parsed = atob(payload);
    return JSON.parse(parsed);
  } catch (e) {
    return null;
  }
}

export function formatCurrency(s: number | string): string {
  if (isNil(s)) {
    return '';
  }
  return numeral(s).format('$0,0');
}
