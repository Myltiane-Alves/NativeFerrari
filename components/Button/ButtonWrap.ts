import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { vars } from '../../values';
import { ButtonColorProps } from './ButtonColorProps';
import { getBgColor } from './getBgColor';
import { getBorder } from './getBorder';

export const ButtonWrap = styled.TouchableOpacity<
  TouchableOpacityProps & ButtonColorProps
>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => getBgColor(props.color)};
  border: ${(props) => getBorder(props.color)};
  padding: ${vars.space / 2}px;
  border-radius: ${vars.borderRadiusPx};
  min-width: 150px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
