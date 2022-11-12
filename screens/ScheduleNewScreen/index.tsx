import { Screen } from '..';
import { Header } from '../../components/Header';
import { Page } from '../../components/Page';
import { BackButton } from '../../components/Page/BackButton';
import { ContinueButton } from '../../components/Page/ContinueButton';
import { PageFooter } from '../../components/Page/PageFooter';
import { Layout } from '../../providers/Layout';

export const ScheduleNewScreen = (props)=> {
    return (
        <Layout
            header={
                <Header onPressBack={() => props.navigation.navigate(Screen.Home)} />
            }
        >
            <Page title="Escolha a Data" color="blue" ></Page>
            <PageFooter
                buttons={[
                    {
                        ...BackButton,
                        onPress: () => props.navigation.navigate(Screen.Home)
                    },
                    {
                        ...ContinueButton,
                        onPress: () => {},
                    }
                ]}
            />
        </Layout>
    )
}

  