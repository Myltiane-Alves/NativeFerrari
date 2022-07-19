import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { Screen, Screens } from './screens';
import { DrawerCustom } from './components/DrawerCustom';

const Drawer = createDrawerNavigator<typeof Screens>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName={Screen.Home}
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false
        }}
        drawerContent={(props) => <DrawerCustom {...props}/>}
      >
        <Drawer.Screen name={Screen.Home} component={HomeScreen} />
        <Drawer.Screen name={Screen.Services} component={ServicesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

