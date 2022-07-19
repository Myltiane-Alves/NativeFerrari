import { GalleryImage } from './GalleryImage';
import { GalleryItemProps } from './GalleryItemProps';
import { GalleryItemWrap } from './GalleryItemWrap';
import { GalleryLegend } from './GalleryLegend';
import { GalleryLegendSubtitle } from './GalleryLegendSubtitle';
import { GalleryLegendTitle } from './GalleryLegendTitle';

export const GalleryItem = ({ image, title, subtitle }: GalleryItemProps) => {
  return (
    <GalleryItemWrap>
      <GalleryImage source={image} />
      <GalleryLegend>
        <GalleryLegendTitle>{title}</GalleryLegendTitle>
        <GalleryLegendSubtitle>{subtitle}</GalleryLegendSubtitle>
      </GalleryLegend>
    </GalleryItemWrap>
  );
};
