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
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

export default function PhotosessionsShowMultiple({ photosessions, title, subheader, text, actionButton }) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  if (photosessions.length < 2) {
    return null;
  }

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
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
    <Box sx={{ py: 2, mb: 2 }}>
      <CardHeader
        title={
          <NextLink href={actionButton.link} passHref>
            <Button variant={'text'}>
              <Typography sx={{ color: 'error.main' }} variant="h3">{title}</Typography>
            </Button>
          </NextLink>
        }
        subheader={<Typography sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}>{text.replace('\\n', ' ')}</Typography>}
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
          <Button sx={{mt:1}} variant="contained" color='primary' aria-label={actionButton.text}>
            <Iconify icon={'fa-regular:eye'} width={20} height={20} sx={{ mr: 1 }} />
            {actionButton.text}
          </Button>
        </NextLink>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BookingItem({ item }) {
  const { author, place, slug, category, title: name, images, date: bookdAt, coverImage: cover, tags: roomType } = item;
  return (
    <Paper sx={{ mx: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={1.5} sx={{ p: 3, pb: 1.5 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: '65px', height: '65px' }} alt={author.name} src={author.picture.url} />
          <Stack sx={{ width: '100%' }} direction="column" justifyContent={'center'} alignItems={'center'}>
            <NextLink href={`/photosessions/${category.slug}/${slug}`} passHref>
              <Link variant={'text'}>
                <Typography variant='subtitle1' align={'center'} sx={{
                  width: '100%',
                  mb: 1,
                  cursor: 'pointer',
                  color: 'primary.main'
                }}>
                  {name}
                </Typography>
              </Link>
            </NextLink>
            <Stack spacing={1.5} direction="row" alignItems={'end'} justifyContent={'space-between'}
                   sx={{ width: '100%', px: 1 }}>
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
               sx={{ color: 'text.secondary',  px: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'clarity:camera-solid'} width={16} height={16} />
            <Typography variant="caption">Фотограф: {author.name}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon={'wpf:stack-of-photos'} width={16} height={16} />
            <Typography variant="caption">Фото: {images.length} шт.</Typography>
          </Stack>


        </Stack>
      </Stack>

      <Box sx={{ p: 1, position: 'relative' }}>
        {roomType && roomType.map(({ title, slug }, i) => {
          let bottom = (i * 25) + 16;
          return <NextLink key={slug} href={`/tag/${slug}`} passHref>
            <a>
              <Label
                variant="filled"
                sx={{
                  right: 16,
                  zIndex: 9,
                  bottom: { bottom },
                  position: 'absolute',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                }}
              >
                {title}
              </Label>
            </a>
          </NextLink>;
        })}
        <NextLink href={`/photosessions/${category.slug}/${slug}`}>
          <a><Image alt={name} src={cover.url} ratio="1/1" sx={{ borderRadius: 1.5 }} /></a>
        </NextLink>
      </Box>
    </Paper>
  );
}
