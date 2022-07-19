import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const PageWrap = styled.View`
  position: relative;
  height: ${Dimensions.get('window').height - 93}px;
`;
