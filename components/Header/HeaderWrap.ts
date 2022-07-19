import styled from 'styled-components/native';
import { vars } from '../../values';

export const HeaderWrap = styled.View`
  background-color: ${vars.gray7};
  width: 100%;
  min-height: ${vars.space * 3}px;
  position: absolute;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 ${vars.space / 2}px;
  padding-top: 25px;
`;
