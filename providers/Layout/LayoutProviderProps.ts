import { ReactNode } from 'react';

export type LayoutProviderProps = {
  children: ReactNode;
  header?: ReactNode;
  onRefresh?: (callback: () => void) => void;
};
