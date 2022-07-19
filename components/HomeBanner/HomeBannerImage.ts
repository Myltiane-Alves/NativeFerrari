import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const HomeBannerImage = styled.Image`
  width: 100%;
  height: ${Dimensions.get('screen').height - 141}px;
`;
