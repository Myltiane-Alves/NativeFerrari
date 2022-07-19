import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { vars } from '../../values';

const PageTitleWrap = styled.View`
  align-items: center;
`;
const PageTitleBorder = styled.View`
  width: 64px;
  height: 4px;
  background-color: ${vars.red};
  margin-top: ${vars.space / 2}px;
`;
const PageTitleText = styled.Text`
  font-size: 28px;
  color: ${vars.green};
  font-weight: bold;
`;

type PageTitleProps = {
  title: string;
  style?: ViewStyle;
};

export const PageTitle = ({ title, style }: PageTitleProps) => {
  return (
    <PageTitleWrap style={style}>
      <PageTitleText>{title}</PageTitleText>
      <PageTitleBorder />
    </PageTitleWrap>
  );
};
