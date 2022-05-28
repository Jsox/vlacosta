import { useState } from 'react';
import Image from '@graphcms/react-image';
import Masonry from 'react-masonry-css';
import styles from './PhotoGallery.module.css';
import LightboxModal from '../LightboxModal';
import Box from '@mui/material/Box';
import { m } from 'framer-motion';
import FadeInWhenVisible from '../animate/ShowThenInView';

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
          const asset = {
            handle: item.handle,
            width: item.width,
            height: item.height,
            fit: 'max',
          };

          return <m.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            key={item.handle}
          >
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleOpenLightbox(item.url)}>
              <FadeInWhenVisible duration={0.4}>
                <Image
                  transforms={[
                    'quality=value:85',
                  ]}
                  maxWidth={389}
                  position={'absolute'}
                  withWebp={true}
                  fit='max'
                  image={asset}
                  alt={item?.title || `${alt} | Фотография №${i}`}
                  title={item?.title || `${alt} | №${i}`}
                  sx={{ border: '1px solid white', borderRadius: 1, shadow: 3 }}
                />
              </FadeInWhenVisible>
            </Box>
          </m.div>;
        })}
      </Masonry>
    </>
  );
};

export default PhotoGallery;