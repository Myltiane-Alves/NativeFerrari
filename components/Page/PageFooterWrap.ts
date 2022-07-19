import styled from 'styled-components/native';
import { vars } from '../../values';

export const PageFooterWrap = styled.View<{ buttonsCount: number }>`
  background-color: ${vars.gray12};
  padding: ${vars.spacePx};
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.buttonsCount > 1 ? 'space-between' : 'center'};
  position: absolute;
  bottom: 0;
  width: 100%;
`;
