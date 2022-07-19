import { TextInputProps, ViewStyle } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';

export type InputFieldProps = {
  label: string;
  inputProps?: TextInputProps;
  readOnly?: boolean;
  style?: ViewStyle;
  mask?: TextInputMaskProps;
};
