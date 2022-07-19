import styled from 'styled-components/native';
import { vars } from '../../values';
import mapa from '../../assets/mapa.png';
import { HomeTitle } from '../Home/HomeTitle';
import { PageTitle } from '../PageTitle';
import { InputField } from '../InputField';
import { Button } from '../Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import { ContactInfo } from './ContactInfo';
import { PlaceSvg } from './PlaceSvg';
import { PhoneSvg } from './PhoneSvg';
import { SkypeSvg } from './SkypeSvg';
import { TwitterSvg } from './TwitterSvg';
import { ContactWrap } from './ContactWrap';
import { ContactBody } from './ContactBody';
import { ContactText } from './ContactText';
import { ContactMap } from './ContactMap';

export const Contact = () => {
  return (
    <ContactWrap>
      <ContactBody>
        <HomeTitle>Entre em Contato</HomeTitle>
        <PageTitle title="Formulário" style={{ alignItems: 'flex-start' }} />
        <ContactText>
          Envie o formulário abaixo para entrar em contato conosco.
        </ContactText>
        <InputField label="Nome Completo" style={{ marginTop: vars.space }} />
        <InputField
          label="E-mail"
          style={{ marginTop: vars.space }}
          inputProps={{
            autoComplete: 'email',
            keyboardType: 'email-address',
          }}
        />
        <InputField
          label="Mensagem"
          style={{ marginTop: vars.space, marginBottom: vars.space }}
          inputProps={{
            multiline: true,
          }}
        />
        <Button color="green">Enviar</Button>
      </ContactBody>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://goo.gl/maps/X2mTAckr7ZyuJi1S7')}
      >
        <ContactMap source={mapa} />
      </TouchableOpacity>
      <ContactInfo
        title="OUR HEADQUARTERS"
        subtitle="Modena, Itália"
        icon={<PlaceSvg />}
        onPress={() => Linking.openURL('https://goo.gl/maps/X2mTAckr7ZyuJi1S7')}
      />
      <ContactInfo
        title="speak to us"
        subtitle="(123) 456 7890"
        icon={<PhoneSvg />}
        onPress={() => Linking.openURL('tel:1234567890')}
      />
      <ContactInfo
        title="make a video call"
        subtitle="FerrariOnSkype"
        icon={<SkypeSvg />}
        onPress={() => Linking.openURL('skype:FerrariOnSkype')}
      />
      <ContactInfo
        title="follow on twitter"
        subtitle="2.3M Followers"
        icon={<TwitterSvg />}
        onPress={() => Linking.openURL('https://twitter.com/scuderiaferrari')}
      />
      <ContactBody></ContactBody>
    </ContactWrap>
  );
};
