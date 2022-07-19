import ferrariVermelha from '../../assets/ferrari-vermelha.png';
import { Button } from '../Button';
import { HomeBannerContent } from './HomeBannerContent';
import { HomeBannerImage } from './HomeBannerImage';
import { HomeBannerTitle } from './HomeBannerTitle';
import { HomeBannerWrap } from './HomeBannerWrap';

export const HomeBanner = () => {
  return (
    <HomeBannerWrap>
      <HomeBannerImage source={ferrariVermelha} />
      <HomeBannerContent>
        <HomeBannerTitle>SF90 Stradale</HomeBannerTitle>
        <Button color="outline-white">Detalhes</Button>
      </HomeBannerContent>
    </HomeBannerWrap>
  );
};
