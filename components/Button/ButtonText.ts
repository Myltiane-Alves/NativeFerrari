import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { ButtonColorProps } from './ButtonColorProps';
import { getTextColor } from './getTextColor';

export const ButtonText = styled.Text<TextProps & ButtonColorProps>`
  font-size: 16px;
  color: ${(props) => getTextColor(props.color)};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
