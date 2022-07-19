import { ReactNode } from 'react';
import { PageColor } from './PageColor';

export type PageProps = {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  color?: PageColor;
};
