import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from '../Image';
import { getRandomInt } from '../../utils/formatNumber';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}`,
    // src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    // srcSet: `${image}?w=${size * cols}&h=${
    //   size * rows
    // }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const PhotoGallery = ({images, alt = 'Фотография'}) => {
  return (
      <ImageList
        sx={{ width: '100%', height: 'auto' }}
        variant="masonry"
        cols={3}
        // rowHeight={120}
        // rowHeight={{ xs: 50, md:100, lg: 200 }}
      >
        {images.map((item, i) => {
          let rows = getRandomInt(1,2);
          let cols = getRandomInt(1,2);
          return <ImageListItem key={item.url} cols={cols} rows={rows}>
            <Image
              {...srcset(item.url, 121, rows, cols)}
              alt={item?.title || `${alt} №${i}`}
              title={item?.title || `${alt} №${i}`}
              loading="lazy"
            />
          </ImageListItem>;
        })}
      </ImageList>
  );
};

export default PhotoGallery;