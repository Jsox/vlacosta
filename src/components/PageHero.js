// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionContainer } from './animate';
import React from 'react';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ backgroundimage, theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    `url(/assets/overlay.svg)${backgroundimage && ', url(' + backgroundimage})`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));


const PageHero = ({ blocks: { left = '', right = '', center = '' } = {}, header, backgroundimage = '' }) => {
  return (
    <RootStyle backgroundimage={backgroundimage}>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Typography variant={'h1'} sx={{ color: 'primary.light' }}>{header}</Typography>
          <Stack sx={{ flexDirection: { md: 'row', xs: 'column' } }} spacing={1} justifyContent={'space-between'}>
            <Box sx={{
              width: { xs: '100%', sm: '33.3%' },
              textAlign: { md: 'start', xs: 'center' },
              color: 'common.white',
              alignItems: 'center',
              display: 'block',
            }}>
              {left}
            </Box>
            <Box sx={{
              width: { xs: '100%', sm: '33.3%' },
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              display: 'flex',
              color: 'common.white',
            }}>
              {center}
            </Box>
            <Box sx={{
              width: { xs: '100%', sm: '33.3%' },
              textAlign: { md: 'end', xs: 'center' },
              alignItems: 'center',
              display: 'block',
              color: 'common.white',
            }}>
              {right}
            </Box>
          </Stack>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default PageHero;