import styled from 'styled-components/native';
import { vars } from '../../values';

export const ContactInfoWrap = styled.View`
  margin: ${vars.spacePx};
  margin-top: ${vars.space * 3}px;
  padding: ${vars.spacePx};
  padding-top: ${vars.space * 3}px;
  border: 1px solid ${vars.gray3};
  align-items: center;
  position: relative;
`;
