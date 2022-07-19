import styled from 'styled-components/native';
import { vars } from '../../values';

export const FooterButtonUp = styled.TouchableOpacity`
  position: absolute;
  top: -32px;
  right: ${vars.spacePx};
  background-color: ${vars.gray8};
  height: 64px;
  width: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
`;
