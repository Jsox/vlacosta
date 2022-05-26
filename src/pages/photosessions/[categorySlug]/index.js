import React, { useEffect, useRef, useState } from 'react';
import { categoriesPaths, category } from '../../../utils/api';
import Page from '../../../components/Page';
import { Box, Container, Pagination } from '@mui/material';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { styled } from '@mui/material/styles';
import useSettings from '../../../hooks/useSettings';
import Layout from '../../../layouts';
import getMetaDescriptionText from '../../../utils/getMetaDescriptionText';
import TypographyDangerSetHtml from '../../../utils/dangerSetHtml';
import PhotoSessionCard from '../../../components/PhotoSessionCard';
import Grid from '@mui/material/Grid';
import PageHero from '../../../components/PageHero';
import Iconify from '../../../components/Iconify';
import { AnimatedText } from './[slug]';
import PaginationItem from '@mui/material/PaginationItem';

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

  let currentPage = parseInt(window.location.hash.replace('#', '')) || 1;

  const topOfSessions = useRef();

  function goToTopOfSessions() {
    topOfSessions.current.scrollIntoView({ behavior: 'smooth' });
  }

  const sessionsOnPage = 6;
  const totalPages = Math.ceil(allPhotosessions.length / sessionsOnPage);

  const { themeStretch } = useSettings();


  let [title, setTitle] = useState(`${cleanTitle} в Новороссийске`);
  let [page, setPage] = useState(currentPage);

  const getPhotosessions = () => {
    let from = (page - 1) * sessionsOnPage;
    let to = from + sessionsOnPage;
    return allPhotosessions.slice(from, to);
  };

  let [photosessions, setPhotosessions] = useState(getPhotosessions);

  const handlePageChange = (event, value) => {
    goToTopOfSessions();
    setPage(value);
    if (value == 1) {
      setTitle(`${cleanTitle}`);
    } else {
      setTitle(`${cleanTitle} | Страница ${value}`);
    }
  };

  useEffect(() => {
    setPhotosessions(getPhotosessions);
  }, [page]);

  const meta = {
    description: getMetaDescriptionText(description.text),
  };

  const blocks = {
    center: (
      <AnimatedText text={<TypographyDangerSetHtml>{description.html}</TypographyDangerSetHtml>} effect={'inTop'} />),
    bottom: <AnimatedText text={<Box sx={{ mt: { xs: 2, md: 5 } }}>
      <Iconify sx={{ color: 'error.main', mr: 1 }} icon={'wpf:stack-of-photos'} width={25} height={25} />
      Выставлено фотосессий: {allPhotosessions.length} шт.
    </Box>} effect={'inBottom'} />,
  };

  return (
    <Page title={title} {...meta}>
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
          <Grid ref={topOfSessions} sx={{ mt: 4, mb: 2 }} container spacing={2}>
            {photosessions.map(photosession => (
              <Grid key={photosession.slug} item xs={12} sm={6} lg={4}>
                <PhotoSessionCard item={photosession} />
              </Grid>
            ))}
          </Grid>
          {allPhotosessions.length > sessionsOnPage && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Pagination
              onChange={handlePageChange}
              page={page}
              count={totalPages}
              color="error"
              renderItem={(item) => {
                item.href = `#${item.page}`;
                return <PaginationItem
                  component={'a'}
                  {...item}
                />;
              }}
            />
          </Box>}
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
