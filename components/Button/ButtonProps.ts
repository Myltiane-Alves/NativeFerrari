import { ReactNode } from 'react';
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { ButtonColor } from './ButtonColor';

export type ButtonProps = {
  children: string | ReactNode;
  color?: ButtonColor;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
} & TouchableOpacityProps;
