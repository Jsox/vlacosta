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
import getMetaDescriptionText from '../../utils/getMetaDescriptionText';
import SetHead from '../../utils/SetHead';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import BlogPostCard from '../../sections/@dashboard/blog/BlogPostCard';
import SkeletonPostItem from '../../components/skeleton/SkeletonPostItem';
import TypographyDangerSetHtml from '../../utils/dangerSetHtml';

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

  const { photosessions, title, description } = data[0];
  const photosessionsLength = photosessions.length;

  const blocks = {
    left: <Typography variant='h4' >{`Всего ${photosessionsLength} шт.`}</Typography>,
    bottom: <TypographyDangerSetHtml variant='h5' >{description.html}</TypographyDangerSetHtml>
  }
  return (
    <Page>
      <SetHead title={`Наши Фотосъемкисъёмки в жанре "${title}". ${photosessionsLength} примеров`}
               description={getMetaDescriptionText(`Все наши фотосессии в жанре "${title}" в Новороссийске, Анапе, Геленджике, Кабардинке и других. ${photosessionsLength} сессий`)} />
      <PageHero blocks={blocks} auto={'0'} header={`Фотосъёмки в жанре "${title}"`}
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
          <Grid container spacing={3}>
            {photosessions.map((post, index) =>
              post ? (
                <Grid key={post.id} item xs={12} sm={6} md={(index === 0 && 6) || 3}>
                  <BlogPostCard post={post} index={index} />
                </Grid>
              ) : (
                <SkeletonPostItem key={index} />
              )
            )}
          </Grid>
          {/*{photosessions && photosessions.length && photosessions.map(({category, title, slug }) => (*/}
          {/*  <Link key={slug} href={`/photosessions/${category.slug}/${slug}`} passHref>*/}
          {/*    <Button component={'a'} variant={'h3'}>{title}</Button>*/}
          {/*  </Link>*/}
          {/*  ),*/}
          {/*)}*/}
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