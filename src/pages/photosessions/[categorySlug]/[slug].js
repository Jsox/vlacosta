import { photosession, photosessionsPaths } from '../../../utils/api';
import { styled } from '@mui/material/styles';
import Layout from '../../../layouts';
import Page from '../../../components/Page';
import { Container, Typography } from '@mui/material';
import PageHero from '../../../components/PageHero';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import React from 'react';
import { m } from 'framer-motion';
import { varFade } from '../../../components/animate/variants';
import Iconify from '../../../components/Iconify';
import { fDate, fToNow } from '../../../utils/formatTime';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TypographyDangerSetHtml from '../../../utils/dangerSetHtml';
import PhotoGallery from '../../../components/photosessions/PhotoGallery';
import ProductDetailsReviewList from '../../../components/ProductDetailsReviewList';
import SetHead from '../../../utils/SetHead';
import getMetaDescriptionText from '../../../utils/getMetaDescriptionText';
import { MAIN_ROUTES } from '../../../config';
import Link from 'next/link';
import Button from '@mui/material/Button';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: 0,
  paddingBottom: theme.spacing(10),
}));

Slug.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

export default function Slug({ data = null }) {
  if (!data)
    return (null);

  const {
    title,
    content,
    category,
    place,
    author,
    images,
    date,
    persons,
    tags,
    reviews,
    excerpt,
    coverImage,
    content: {
      html,
    } = {},
  } = data;

  let left = <>
    <AnimatedText text={<>
      <Iconify sx={{ color: 'error.main', mr: 1 }} icon={'akar-icons:location'} width={16} height={16} />
      {place?.location}
    </>} effect={'inLeft'} />
    <AnimatedText text={<>
      <Iconify sx={{ color: 'error.main', mr: 1 }} icon={'uiw:date'} width={16} height={16} />
      {fDate(date)} ({fToNow(date)})
    </>} effect={'inLeft'} />
  </>;

  let right = <>
    <AnimatedText text={<>
      <Iconify sx={{ color: 'error.main', mr: 1 }} icon={'wpf:stack-of-photos'} width={16} height={16} />
      ????????: {images.length} ????.
    </>} effect={'inRight'} />
    <AnimatedText text={<>

      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <Link href={`/${MAIN_ROUTES.AUTHORS}/${author.slug}`} passHref>
          <Button >
            <Stack alignItems={'end'} direction={'row'}>
              <AvatarGroup>
                <Avatar component={'span'} sx={{ mr: 1, display: 'inline-block', width: '40px', height: '40px' }}
                        alt={author.name}
                        src={author.picture.url}/>
              </AvatarGroup>
              <Typography component={'span'} variant={'h5'}>????????????????: {author.name}</Typography>
            </Stack>
          </Button>
        </Link>
      </Box>

    </>} effect={'inRight'} />
  </>;
  let center = <>
    {persons.length && <AnimatedText variant={'h4'} text={`???????????????????? ??????`} effect={'inUp'} />}
    <Stack sx={{ mt: 2, width: '100%' }} direction="column" justifyContent={'space-between'} alignItems="center"
           spacing={2}>
      <AvatarGroup max={4}>
        {persons.length && persons.map(({ name, avatar }) => {
          return (
            <Avatar key={name} alt={name} sx={{ width: 65, height: 65 }} component={'span'} src={avatar?.url || ''}
                    variant={'circular'} />);
        })}
      </AvatarGroup>
      <Stack sx={{ width: '100%' }} direction="row" justifyContent={'space-evenly'}>
        {persons.length && persons.map(({ name }, i) => {
          return <Typography key={name} sx={{ ml: 0, color: 'error.main' }} variant={'subtitle1'}>{name}</Typography>;
        })}
      </Stack>
    </Stack>
  </>;
  const blocks = {
    left: left,
    right: right,
    center: center,
  };

  return (
    <Page>
      <PageHero blocks={blocks} header={`${title}`}
                backgroundimage={coverImage.url} />
      <SetHead title={`${title}, ${fToNow(date)}, ${place.location}`}
               description={getMetaDescriptionText(content.text)} />
      <RootStyle>
        <Container>
          <HeaderBreadcrumbs
            heading={`${title}, ${place.location}`}
            links={[
              {
                name: '??????????????',
                href: '/',
              },
              {
                name: '?????? ????????????????????',
                href: '/photosessions',
              }, {
                name: category.title,
                href: `/photosessions/${category.slug}`,
              },
              {
                name: `${title}`,
              },
            ]}
          />
          <TypographyDangerSetHtml sx={{ fontWeight: 400, mb: 2 }} variant={'h3'} html={excerpt} />
          <TypographyDangerSetHtml sx={{ fontWeight: 400, mb: { xs: 2, md: 4 } }}
                                   variant={'h5'}>{html}</TypographyDangerSetHtml>
          <ProductDetailsReviewList reviews={reviews} />
          <PhotoGallery images={images} alt={title} />
        </Container>
      </RootStyle>
    </Page>
  );
};

export async function getStaticProps({ params }) {
  const data = await photosession(params.slug);
  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const slugs = await photosessionsPaths();
  const params = [];
  slugs.map(({ slug, category }) => {
    if (slug && category?.slug) {
      const val = {
        params: {
          slug: `${slug}`,
          categorySlug: `${category.slug}`,
        },
      };
      params.push(val);
    }
  });
  return {
    paths: params,
    fallback: true,
  };
}

export function AnimatedText({ variant = 'h5', text, effect, ...other }) {
  return (
    <m.div {...other} variants={varFade()[effect]}>
      <Typography
        variant={variant}
        sx={{
          mt: { xs: 1, md: 2 },
          color: 'common.white',
          fontWeight: 'fontWeightMedium',
        }}
      >
        {text}
      </Typography>
    </m.div>
  );
}