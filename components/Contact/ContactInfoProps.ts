import { GestureResponderEvent } from 'react-native';

export type ContactInfoProps = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  onPress:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
};
