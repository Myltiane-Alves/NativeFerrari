import { GestureResponderEvent } from 'react-native';
import { ButtonColor } from '../Button/ButtonColor';

export type PageFooterButton = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  disabled?: boolean;
  loading?: boolean;
  color?: ButtonColor;
};
