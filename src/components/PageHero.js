// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionContainer } from './animate';
import React from 'react';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ backgroundimage, auto, theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    `url(/assets/overlay.svg)${backgroundimage && ', url(' + backgroundimage})`,
  padding: theme.spacing(10, 0, 2),
  [theme.breakpoints.up('md')]: {
    height: auto != '0' ? 350 : 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));


const PageHero = ({ blocks: { left = '', right = '', center = '', bottom = '' } = {}, header, backgroundimage = '', auto = '0' }) => {
  return (
    <RootStyle auto={auto} backgroundimage={backgroundimage}>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Typography component={'h1'} variant={'h2'} sx={{ color: 'primary.light' }}>{header}</Typography>
          <Stack sx={{ paddingTop: 3, flexDirection: { md: 'row', xs: 'column' } }} spacing={1}
                 justifyContent={'space-between'}>
            <Box sx={{
              // width: { xs: '100%', sm: '33.3%' },
              textAlign: { md: 'start', xs: 'center' },
              color: 'common.white',
              alignItems: 'center',
              display: 'block',
            }}>
              {left}
            </Box>
            <Box sx={{
              // width: { xs: '100%', sm: '33.3%' },
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              display: 'flex',
              color: 'common.white',
            }}>
              {center}
            </Box>
            <Box sx={{
              // width: { xs: '100%', sm: '33.3%' },
              textAlign: { md: 'end', xs: 'center' },
              alignItems: 'center',
              display: 'block',
              color: 'common.white',
            }}>
              {right}
            </Box>
          </Stack>
          <Box sx={{ my: 2 }}>{bottom}</Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default PageHero;