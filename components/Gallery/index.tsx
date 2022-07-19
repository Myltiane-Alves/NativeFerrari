import { GalleryHorizontal } from './GalleryHorizontal';
import { GalleryItem } from './GalleryItem';
import { GalleryProps } from './GalleryProps';

export const Gallery = ({ items }: GalleryProps) => {
  return (
    <GalleryHorizontal horizontal={true}>
      {items.map(({ title, subtitle, image }, index) => (
        <GalleryItem
          key={index}
          title={title}
          subtitle={subtitle}
          image={image}
        />
      ))}
    </GalleryHorizontal>
  );
};
