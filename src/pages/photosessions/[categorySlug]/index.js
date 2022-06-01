import React, { useEffect, useState } from 'react';
import { categoriesPaths, category } from '../../../utils/api';
import Page from '../../../components/Page';
import { Box, Container } from '@mui/material';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { styled } from '@mui/material/styles';
import useSettings from '../../../hooks/useSettings';
import Layout from '../../../layouts';
import getMetaDescriptionText from '../../../utils/getMetaDescriptionText';
import TypographyDangerSetHtml from '../../../utils/dangerSetHtml';
import PageHero from '../../../components/PageHero';
import Iconify from '../../../components/Iconify';
import { AnimatedText } from './[slug]';
import PhotoSessionsList from '../../../components/photosessions/PhotoSessionsList';
import usePagination from '../../../hooks/usePagination';
import Typography from '@mui/material/Typography';
import SetHead from '../../../utils/SetHead';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(10),
}));

Index.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

export default function Index({ data }) {

  const { title: cleanTitle, description, photosessions: allPhotosessions, image } = data;

  const { themeStretch } = useSettings();

  let pagination = usePagination();

  let { titleAddon } = pagination;

  let [title, setTitle] = useState(`${cleanTitle} в Новороссийске ${titleAddon}`);

  let [metaDescriptionText, setMetaDescriptionText] = useState(getMetaDescriptionText(description.text, ` ${titleAddon}`));

  useEffect(() => {
    setTitle(`${cleanTitle} в Новороссийске ${titleAddon}`);
    setMetaDescriptionText(getMetaDescriptionText(description.text, ` ${titleAddon}`));
  }, [titleAddon]);

  const blocks = {
    center: (
      <AnimatedText text={<TypographyDangerSetHtml>{description.html}</TypographyDangerSetHtml>} effect={'inTop'} />),
    bottom: <AnimatedText text={<Box sx={{ mt: { xs: 2, md: 5 } }}>
      <Iconify sx={{ color: 'error.main', mr: 1 }} icon={'wpf:stack-of-photos'} width={25} height={25} />
      Выставлено фотосессий: {allPhotosessions.length} шт.
    </Box>} effect={'inBottom'} />,
  };

  return (
    <Page>
      <SetHead title={title} description={metaDescriptionText} />
      <PageHero blocks={blocks} header={`${cleanTitle}`} backgroundimage={image.url} />
      <RootStyle>
        <Container sx={{ px: 0 }} maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading={`${title}`}
            links={[
              {
                name: 'Главная',
                href: '/',
              },
              {
                name: 'Все фотосессии',
                href: '/photosessions',
              },
              {
                name: title,
              },
            ]}
          />
          <PhotoSessionsList pagination={pagination} photosessions={allPhotosessions} />
        </Container>
      </RootStyle>
    </Page>
  );
};

export async function getStaticProps({ params }) {
  const data = await category(params.categorySlug);
  return {
    props: {
      data: data,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const slugs = await categoriesPaths();
  const params = [];
  slugs.map(({ slug }) => {
    if (slug) {
      const val = {
        params: {
          categorySlug: `${slug}`,
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
