import { getRandomInt } from '../../utils/formatNumber';
import { useState } from 'react';
import Image from '@graphcms/react-image';
import Masonry from 'react-masonry-css';
import styles from './PhotoGallery.module.css';
import LightboxModal from '../LightboxModal';

const PhotoGallery = ({ images, alt = 'Фотография' }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };
  const [openLightbox, setOpenLightbox] = useState(false);

  const [selectedImage, setSelectedImage] = useState(0);

  const imagesLightbox = images.map(({ url: _image }) => _image);
  const handleOpenLightbox = (url) => {
    const selectedImage = imagesLightbox.findIndex((index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (<>
      <LightboxModal
        images={imagesLightbox}
        mainSrc={imagesLightbox[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.photoGallery}
        columnClassName={styles.photoGalleryColumn}>

        {images.map((item, i) => {
          let rows = getRandomInt(1, 2);
          let cols = getRandomInt(1, 2);

          const [loaded, setLoaded] = useState(false);
          const asset = {
            handle: item.handle,
            width: item.width,
            height: item.height,
            fit: 'max',
          };

          return <div onClick={() => handleOpenLightbox(item.url)}>
            <Image
              transforms={[
                'quality=value:85',
              ]}
              maxWidth={389}
              position={'absolute'}
              withWebp={true}
              fit='max'
              key={item.handle}
              image={asset}
              alt={item?.title || `${alt} | Фотография №${i}`}
              title={item?.title || `${alt} | №${i}`}
              sx={{ borderRadius: 1, shadow: 3 }}
            />
          </div>;
        })}
      </Masonry>
    </>
  );
};

export default PhotoGallery;