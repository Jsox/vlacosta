// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';
import React from 'react';
import SiteAuthorFooterStr from '../../components/SiteAuthorFooterStr';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Разделы сайта',
    children: [
      // { name: 'About us', href: PATH_PAGE.about },
      // { name: 'Contact us', href: PATH_PAGE.contact },
      // { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Условия',
    children: [
      { name: 'Условия использования', href: '#' },
      { name: 'О нас', href: '#' },
    ],
  },
  {
    headline: 'Связаться',
    children: [
      { name: 'admin@vlacosta.ru', href: 'mailto:admin@vlacosta.ru' },
      { name: 'Новороссийск, ул.Свердлова', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={4}>
            <Typography align="justify" variant="body2" sx={{ pr: { md: 5 } }}>
              <Typography variant="subtitle2" sx={{ pr: { md: 5 } }}>Студия фотографии и фотографы в
                Новороссийске.</Typography>
              У нас Вы можете заказать фотосессию и фотографа любого жанра, начиная от свадебной, семейной или детской
              фотосессии и заканчивая фотосъемкой квартиры для сдачи в аренду, товаров для вайлдберис или открытия
              магазина.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={'#'} passHref>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <SiteAuthorFooterStr />
      </Container>
    </RootStyle>
  );
}
