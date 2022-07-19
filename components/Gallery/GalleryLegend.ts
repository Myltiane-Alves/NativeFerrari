import styled from 'styled-components/native';
import { vars } from '../../values';

export const GalleryLegend = styled.View`
  position: absolute;
  left: 0;
  bottom: ${vars.spacePx};
  background-color: ${vars.black75};
  padding: 0 ${vars.spacePx};
  height: 72px;
  justify-content: center;
`;
