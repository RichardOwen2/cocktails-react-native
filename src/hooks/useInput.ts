import { useState, ChangeEvent } from 'react';

export type IUseInput<T> = [
  value: T | undefined,
  onChange: (e: any) => void
];

export default function useInput<T>(defaultValue?: T): IUseInput<T> {
  const [value, setValue] = useState<T | undefined>(defaultValue);

  const onChange = (value: T): void => {
    setValue(value);
  };

  return [value, onChange];
}
