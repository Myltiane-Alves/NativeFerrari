import { Linking } from 'react-native';
import { useLayout } from '../../hooks/useLayout';
import { LogoFerrariGray } from '../LogoFerrariGray';
import { ArrowUpSvg } from './ArrowUpSvg';
import { FacebookSvg } from './FacebookSvg';
import { FooterFerrariLogo } from './FooterFerrariLogo';
import { FooterButtonUp } from './FooterButtonUp';
import { FooterCopyright } from './FooterCopyright';
import { FooterIcon } from './FooterIcon';
import { FooterIcons } from './FooterIcons';
import { FooterText } from './FooterText';
import { FooterTitle } from './FooterTitle';
import { FooterWrap } from './FooterWrap';
import { InstagramSvg } from './InstagramSvg';
import { TwitterSvg } from './TwiiterSvg';
import { YoutubeSvg } from './YoutubeSvg';

export const Footer = () => {
  const { toUp } = useLayout();

  return (
    <FooterWrap>
      <FooterButtonUp onPress={() => toUp()}>
        <ArrowUpSvg />
      </FooterButtonUp>
      <FooterTitle>Contato</FooterTitle>
      <FooterText>E-mail: support@ferrari.it</FooterText>
      <FooterIcons>
        <FooterIcon
          onPress={() => Linking.openURL('https://www.facebook.com/Ferrari/')}
        >
          <FacebookSvg />
        </FooterIcon>
        <FooterIcon
          onPress={() => Linking.openURL('https://twitter.com/scuderiaferrari')}
        >
          <TwitterSvg />
        </FooterIcon>
        <FooterIcon
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCd8iY-kEHtaB8qt8MH--zGw'
            )
          }
        >
          <YoutubeSvg />
        </FooterIcon>
        <FooterIcon
          onPress={() => Linking.openURL('https://www.instagram.com/ferrari/')}
        >
          <InstagramSvg />
        </FooterIcon>
      </FooterIcons>
      <FooterFerrariLogo>
        <LogoFerrariGray />
      </FooterFerrariLogo>
      <FooterCopyright>2020 © Hcode. All rights reserved.</FooterCopyright>
    </FooterWrap>
  );
};
