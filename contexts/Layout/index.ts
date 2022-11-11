import { createContext } from 'react';
import { LayoutProviderProps } from '../../providers/Layout/LayoutProviderProps';
import { LayoutContextType } from './LayoutContextType';

export const LayoutContext = createContext<LayoutContextType>({})

