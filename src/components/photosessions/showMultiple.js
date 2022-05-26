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
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import PhotoSessionCard from '../PhotoSessionCard';

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
          (<PhotoSessionCard sx={{m:1}} key={item.slug} item={item} />),
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
