import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Iconify from '../Iconify';
import { fToNow } from '../../utils/formatTime';
import Label from '../Label';
import Image from '../Image';
import React from 'react';
import { m } from 'framer-motion';
import FadeInWhenVisible from '../animate/ShowThenInView';
import TextMaxLine from '../TextMaxLine';

function PhotoSessionCard({ item, sx, index = 0 }) {
  const { content, excerpt, author, place, slug, category, title: name, images, date: bookdAt, coverImage: cover, tags: roomType } = item;
  return (
    <m.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <FadeInWhenVisible delay={index * 0.05}>
        <Paper sx={{ mx: 0, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}>
          <Stack spacing={1.5} sx={{ p: 1, pt: 2, pb: 1.5 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: '65px', height: '65px' }} alt={author.name} src={author.picture.url} />
              <Stack sx={{ width: '100%' }} direction="column" justifyContent={'center'} alignItems={'center'}>
                <NextLink href={`/photosessions/${category.slug}/${slug}`} passHref>
                  <Link sx={{ minHeight: 20 }} variant={'text'}>
                    <Typography variant='subtitle1' align={'center'} sx={{
                      width: '100%',
                      mb: 1,
                      cursor: 'pointer',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: '3rem',
                    }}>
                      {name}
                    </Typography>
                  </Link>
                </NextLink>
                <Stack spacing={0} direction="row" alignItems={'end'} justifyContent={'space-between'}
                       sx={{ width: '100%', px: 0, display: 'inline-block' }}>
                  <Typography noWrap variant="caption"
                              sx={{ width: '50%', display: 'inline-block', color: 'text.disabled', mt: 0.5 }}>
                    <Iconify icon={'akar-icons:location'} width={16} height={16} /> {place?.location}
                  </Typography>
                  <Typography noWrap={true} variant="caption"
                              sx={{ width: '50%', display: 'inline-block', color: 'text.disabled', mt: 0.5 }}>
                    <Iconify icon={'uiw:date'} width={16} height={16} /> {fToNow(bookdAt)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent={'space-between'} alignItems="center" spacing={3}
                   sx={{ color: 'text.secondary', px: 1 }}>
              <NextLink href={'/authors/' + author.slug} passHref>
                <Stack sx={{color: 'text.primary'}} component={'a'} direction="row" alignItems="center" spacing={1}>
                  <Iconify icon={'clarity:camera-solid'} width={20} height={20} />
                  <Typography variant="caption">????????????????: {author.name}</Typography>
                </Stack>
              </NextLink>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify icon={'wpf:stack-of-photos'} width={20} height={20} />
                <Typography variant="caption">????????: {images.length} ????.</Typography>
              </Stack>


            </Stack>
            <TextMaxLine persistent={true} line={3}>{content.text.replace('\\n', ' ')}</TextMaxLine>
          </Stack>

          <Box sx={{ p: 1, position: 'relative' }}>
            {roomType && roomType.map(({ title, slug }, i) => {
              let bottom = (i * 25) + 16;
              return <NextLink key={slug} href={`/tags/${slug}`}>
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
      </FadeInWhenVisible>
    </m.div>
  );
}

export default PhotoSessionCard;