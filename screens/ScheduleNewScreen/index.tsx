import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { Screen } from '..';
import { Header } from '../../components/Header';
import { Layout } from '../../providers/Layout';

export const ScheduleNewScreen = (props)=> {
    return (
        <Layout
            header={
                <Header onPressBack={() => props.navigation.navigate(Screen.Home)} />
            }
        >
            <Text>Services Screen</Text>
           
        </Layout>
    )
}

  