import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Screen } from '../../screens';
import logo from '../../assets/ferrari-logo.png';
import { LogoWrap } from './LogoWrap';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerHeader } from './DrawerHeader';
import { Fragment } from 'react';
import { vars } from '../../values';
// import { Button } from '../Button';
import photo from '../../assets/no-photo.jpg';
import { DrawerMenu } from './DrawerMenu';
import { styles } from './DrawerItemLabel';
// import { Divider } from '../Divider';
import { DrawerFooter } from './DrawerFooter';
import { UserWrap } from './UserWrap';
import { UserInfo } from './UserInfo';
import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
// import { useAuth } from '../../hooks/useAuth';
import { UserPhoto } from './UserPhoto';
import { getPhotoURL } from './getPhotoURL';

export const DrawerCustom = (props) => {
  // const { user, isLogged, logout } = useAuth();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: '#E5E3DF', flex: 1 }}
    >
      <DrawerHeader onPress={() => props.navigation.closeDrawer()}>
        <MaterialIcons name="close" size={24} color="black" />
      </DrawerHeader>
      <LogoWrap>
        <Image source={logo} />
      </LogoWrap>
      <ScrollView>
        <DrawerMenu>
          <DrawerItem
            label="Home"
            onPress={() => props.navigation.navigate(Screen.Home)}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Revisão"
            onPress={() => props.navigation.navigate(Screen.Services)}
            labelStyle={styles.drawerItemLabel}
          />
          <DrawerItem
            label="Contato"
            onPress={() => props.navigation.navigate(Screen.Services)}
            labelStyle={styles.drawerItemLabel}
          />
        </DrawerMenu>
     
          <Fragment>
            
            <DrawerMenu>
              <DrawerItem
                label="Agendamentos"
                onPress={() => props.navigation.navigate(Screen.Home)}
                labelStyle={styles.drawerItemLabel}
              />
              {/* <DrawerItem
                label="Editar Dados"
                onPress={() => props.navigation.navigate(Screen.Profile)}
                labelStyle={styles.drawerItemLabel}
              /> */}
              <DrawerItem
                label="Mudar Foto"
                onPress={() => props.navigation.navigate(Screen.Services)}
                labelStyle={styles.drawerItemLabel}
              />
              <DrawerItem
                label="Alterar Senha"
                onPress={() => props.navigation.navigate(Screen.Services)}
                labelStyle={styles.drawerItemLabel}
              />
            </DrawerMenu>
          </Fragment>
   
      </ScrollView>
      <DrawerFooter>
    
        
      </DrawerFooter>
    </DrawerContentScrollView>
  );
};
