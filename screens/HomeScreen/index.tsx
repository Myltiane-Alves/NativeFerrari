import { Gallery } from '../../components/Gallery';
import { Header } from '../../components/Header';
import { HomeBanner } from '../../components/HomeBanner';
import { Layout } from '../../providers/Layout';
import ferrariAmarela from '../../assets/ferrari-amarela.png';
import ferrariAzul from '../../assets/ferrari-azul.png';
import ferrariInterior from '../../assets/ferrari-interior.png';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
export const HomeScreen = ()=> {
    return (
        <Layout header={<Header />} >
            <HomeBanner />
            <Gallery
                items={[
                    {
                        image: ferrariAmarela,
                        title: 'Esportivas',
                        subtitle: 'FerrariF1000',
                    },
                    {
                        image: ferrariInterior,
                        title: 'Esportivas',
                        subtitle: 'FerrariF1000',
                    },
                    {
                        image: ferrariAzul,
                        title: 'Esportivas',
                        subtitle: 'FerrariF1000',
                    },
                ]}
            />
            <Contact />
            <Footer />
        </Layout>
    )
}

