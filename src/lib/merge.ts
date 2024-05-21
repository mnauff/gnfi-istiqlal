import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupByToMap = <T, Q>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => Q
) =>
  array.reduce((map, value, index, array) => {
    const key = predicate(value, index, array);
    map.get(key)?.push(value) ?? map.set(key, [value]);
    return map;
  }, new Map<Q, T[]>());
