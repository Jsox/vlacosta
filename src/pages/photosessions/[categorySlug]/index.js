import React from 'react';
import { categoriesPaths, category } from '../../../utils/api';
import Page from '../../../components/Page';
import { Container } from '@mui/material';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { styled } from '@mui/material/styles';
import useSettings from '../../../hooks/useSettings';
import Layout from '../../../layouts';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

Index.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};
export default function Index({ data }) {
  const { themeStretch } = useSettings();

  const { title } = data;

  return (
    <Page title={title}>
      <RootStyle>
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading={`${title} в Новороссийске`}
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

          {title}

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
  console.log(params);
  return {
    paths: params,
    fallback: true,
  };
}