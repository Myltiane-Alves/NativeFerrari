import styled from 'styled-components/native';
import { getPageColor } from './getPageColor';
import { PageColor } from './PageColor';

export const PageHeader = styled.View<{ color: PageColor }>`
  background-color: ${(props) => getPageColor(props.color)};
  min-height: 130px;
  justify-content: center;
  align-items: center;
`;
