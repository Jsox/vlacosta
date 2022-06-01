import { tags } from '../../utils/api';
import Typography from '@mui/material/Typography';
import Layout from '../../layouts';
import React from 'react';
import { styled } from '@mui/material/styles';
import Page from '../../components/Page';
import { Container } from '@mui/material';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { MAIN_ROUTES } from '../../config';
import PageHero from '../../components/PageHero';

Tag.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: 0,
  paddingBottom: theme.spacing(10),
}));

export default function Tag({ data }) {
  if (data.length === 0)
    return null;

  const { photosessions, title } = data[0];
  return (
    <Page>
      <PageHero auto={'1'} header={`${title}`}
                backgroundimage='https://media.graphassets.com/output=format:webp/resize=height:800,fit:max/T7FliKLQRzKkOGsEyEL0' />
      <RootStyle>
        <Container>
          <HeaderBreadcrumbs
            heading={`${title}`}
            links={[
              {
                name: 'Главная',
                href: '/',
              },
              {
                name: 'Все жанры фотосессий',
                href: `/${MAIN_ROUTES.TAGS}`,
              },
              {
                name: title,
              },
            ]}
          />
          {photosessions && photosessions.length && photosessions.map(({ title, slug }) => (
              <Typography key={slug}>{title}</Typography>
            ),
          )}
        </Container>
      </RootStyle>
    </Page>
  )
    ;
};

export async function getStaticProps({ params }) {
  let data = await tags(params.slug);
  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const slugs = await tags();
  const params = [];
  slugs.map(({ slug }) => {
    if (slug) {
      const val = {
        params: {
          slug: `${slug}`,
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