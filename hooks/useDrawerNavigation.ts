import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../screens';

export function useDrawerNavigation() {
  const navigation = useNavigation<DrawerNavigationProp<typeof Screens>>();

  if (!navigation) {
    throw new Error('useDrawerNavigation require DrawerNavigationContext');
  }

  return navigation;
}
