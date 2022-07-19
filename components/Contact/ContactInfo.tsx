import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContactInfoIcon } from './ContactInfoIcon';
import { ContactInfoProps } from './ContactInfoProps';
import { ContactInfoSubtitle } from './ContactInfoSubtitle';
import { ContactInfoTitle } from './ContactInfoTitle';
import { ContactInfoWrap } from './ContactInfoWrap';

export const ContactInfo = ({
  title,
  subtitle,
  icon,
  onPress,
}: ContactInfoProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ContactInfoWrap>
        <ContactInfoIcon>{icon}</ContactInfoIcon>
        <ContactInfoTitle>{title}</ContactInfoTitle>
        <ContactInfoSubtitle>{subtitle}</ContactInfoSubtitle>
      </ContactInfoWrap>
    </TouchableOpacity>
  );
};
