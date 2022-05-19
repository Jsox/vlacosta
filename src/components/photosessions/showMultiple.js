import PropTypes from 'prop-types';
import Slider from 'react-slick';
import React, { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, CardHeader, Paper, Stack, Typography } from '@mui/material';
// utils
import { fToNow } from '../../utils/formatTime';

// components
import Label from '../../components/Label';
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import NextLink from 'next/link';
import Fab from '@mui/material/Fab';

// ----------------------------------------------------------------------

export default function PhotosessionsShowMultiple({ photosessions, title, subheader, text, actionButton }) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  if (photosessions.length < 2) {
    return null;
  }

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ py: 2 }}>
      <CardHeader
        title={<Typography variant="h3">{title}</Typography>}
        subheader={text.replace('\\n', ' ')}
        action={
          <CarouselArrows
            customIcon={'ic:round-keyboard-arrow-right'}
            onNext={handleNext}
            onPrevious={handlePrevious}
            sx={{ '& .arrow': { width: 28, height: 28, p: 0 } }}
          />
        }
        sx={{
          p: 0,
          mb: 3,
          '& .MuiCardHeader-action': { alignSelf: 'center' },
        }}
      />

      <Slider ref={carouselRef} {...settings}>
        {photosessions.map((item) =>
          (<BookingItem key={item.slug} item={item} />),
        )}
      </Slider>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">{subheader}</Typography>
        <NextLink href={actionButton.link} passHref>
          <Fab variant="extended" size="small" color="primary" aria-label={actionButton.text}>
            <Iconify icon={'fa-regular:eye'} width={20} height={20} sx={{ mr: 1 }} />
            {actionButton.text}
          </Fab>
        </NextLink>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

BookingItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.object,
    bookdAt: PropTypes.instanceOf(Date),
    cover: PropTypes.object,
    name: PropTypes.string,
    person: PropTypes.string,
    roomNumber: PropTypes.string,
    roomType: PropTypes.array,
    images: PropTypes.array,
    persons: PropTypes.array,
    author: PropTypes.object,
    category: PropTypes.object,
    slug: PropTypes.string,
    place: PropTypes.object,
  }),
};

function BookingItem({ item }) {
  const { author, place, slug, category, title: name, images, date: bookdAt, coverImage: cover, tags: roomType } = item;

  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={1.5} sx={{ p: 3, pb: 1.5 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: '65px', height: '65px' }} alt={author.name} src={author.picture.url} />
          <Stack sx={{ width: '100%' }} direction="column" justifyContent={'center'} alignItems={'end'}>
            <NextLink href={`/photosessions/${category.slug}/${slug}`} passHref>
              <Typography variant='subtitle1' sx={{
                textAlign: 'center',
                width: '100%',
                cursor: 'pointer',
                minHeight: '2.8rem',
              }}>{name}</Typography>
            </NextLink>
            <Stack spacing={1.5} direction="row" alignItems={'end'} justifyContent={'space-between'}
                   sx={{ width: '100%' }}>
              <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}>
                <Iconify icon={'akar-icons:location'} width={12} height={12} /> {place?.location}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}>
                <Iconify icon={'uiw:date'} width={12} height={12} /> {fToNow(bookdAt)}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent={'space-between'} alignItems="center" spacing={3}
               sx={{ color: 'text.secondary' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'wpf:stack-of-photos'} width={16} height={16} />
            <Typography variant="caption">Фото: {images.length} шт.</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'clarity:camera-solid'} width={16} height={16} />
            <Typography variant="caption">Фотограф: {author.name}</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ p: 1, position: 'relative' }}>
        {roomType && roomType.map(({ title, slug, color }) => {
          return <NextLink key={slug} href={`/tag/${slug}`} passHref>
            <Label
              variant="filled"
              color={color}
              sx={{
                right: 16,
                zIndex: 9,
                bottom: 16,
                position: 'absolute',
                textTransform: 'capitalize',
                cursor: 'pointer',
              }}
            >
              {title}
            </Label>
          </NextLink>;
        })}
        <NextLink href={`/photosessions/${category.slug}/${slug}`} passHref>
          <Image alt={name} src={cover.url} ratio="1/1" sx={{ borderRadius: 1.5 }} />
        </NextLink>
      </Box>
    </Paper>
  );
}
