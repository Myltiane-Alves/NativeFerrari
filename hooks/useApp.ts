import { useContext } from 'react';
import { AppContext } from '../contexts/App';

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within a AppContext');
  }

  return context;
}
