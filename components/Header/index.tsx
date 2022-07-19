import { Fragment } from 'react';
import logo from '../../assets/ferrari-logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useDrawerNavigation } from '../../hooks/useDrawerNavigation';
import { HeaderProps } from './HeaderProps';
import { HeaderWrap } from './HeaderWrap';
import { HeaderButton } from './HeaderButton';
import { HeaderItalyBar } from './HeaderItalyBar';
import { HeaderGreenBar } from './HeaderGreenBar';
import { HeaderWhiteBar } from './HeaderWhiteBar';
import { HeaderRedBar } from './HeaderRedBar';
import { HeaderLogo } from './HeaderLogo';
import { ImageLogo } from './ImageLogo';
import { Screen } from '../../screens';

export const Header = ({ onPressBack }: HeaderProps) => {
  const navigation = useDrawerNavigation();

  return (
    <Fragment>
      <HeaderWrap>
        <HeaderButton onPress={() => navigation.toggleDrawer()}>
          <MaterialIcons name="menu" size={32} color="black" />
        </HeaderButton>
        {onPressBack && (
          <HeaderButton onPress={onPressBack}>
            <MaterialIcons name="arrow-back" size={32} color="black" />
          </HeaderButton>
        )}
      </HeaderWrap>
      <HeaderItalyBar>
        <HeaderGreenBar />
        <HeaderWhiteBar />
        <HeaderRedBar />
      </HeaderItalyBar>
      <HeaderLogo onPress={() => navigation.navigate(Screen.Home)}>
        <ImageLogo source={logo} />
      </HeaderLogo>
    </Fragment>
  );
};
