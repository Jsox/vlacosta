import { author, authorsPaths } from '../../utils/api';
import PhotoSessionsList from '../../components/photosessions/PhotoSessionsList';
import usePagination from '../../hooks/usePagination';
import { styled } from '@mui/material/styles';
import Layout from '../../layouts';
import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import SetHead from '../../utils/SetHead';
import getMetaDescriptionText from '../../utils/getMetaDescriptionText';
import Container from '@mui/material/Container';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { MAIN_ROUTES } from '../../config';
import Typography from '@mui/material/Typography';
import PageHero from '../../components/PageHero';
import Avatar from '../../components/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

import { sortArrayOfObjectsByKey } from '../../utils/formatNumber';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Button from '@mui/material/Button';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: 0,
  paddingBottom: theme.spacing(10),
}));

function getGenres(a) {
  const genres = [];
  a.photosessions.map(({ tags }) => {
    tags.map(({ title, slug, color }) => {
      if (!genres[slug]) {
        let obj = {
          slug: slug,
          count: 1,
          name: title,
          color: color,
        };
        genres[slug] = obj;
      } else {
        genres[slug].count += 1;
      }
    });
  });
  console.log(genres);
  return genres.sort(sortArrayOfObjectsByKey('count', true));
}

const Photographer = ({ author }) => {
  const blocks = {
    left: <Avatar sx={{ width: 200, height: 200 }} src={author.picture.url} />,
    bottom: <Typography sx={{}} variant={'h4'}>{author.biography || ''}</Typography>,
    right: <>
      <Typography sx={{mb: 1}} variant={'h4'}>В каких жанрах снимаю?</Typography>
      <Stack direction="row" spacing={1}>
        {getGenres(author).map(({ slug, name, count, color }, i) =>
          (<Link key={slug} href={`/tags/${slug}`} passHref>
            <Button>
              <Chip key={i} avatar={<Avatar>{count}</Avatar>} label={name} color={color ? color : 'secondary'} />
            </Button>
          </Link> ),
        )}
      </Stack>
    </>,
  };
  const cleanTitle = `Фотограф ${author.name}`;
  const pagination = usePagination();
  const { titleAddon } = pagination;
  const [title, setTitle] = useState(`${cleanTitle} ${titleAddon}`);

  useEffect(() => {
    setTitle(`${cleanTitle} ${titleAddon}`);
  }, [titleAddon]);

  return (
    <Page>
      <SetHead title={title}
               description={getMetaDescriptionText(author.biography)} />
      <RootStyle>
        <PageHero blocks={blocks} backgroundimage={author.picture.url} header={cleanTitle} />
        <Container>
          <HeaderBreadcrumbs
            heading={title}
            links={[
              {
                name: 'Главная',
                href: '/',
              },
              {
                name: 'Все фотографы',
                href: `/${MAIN_ROUTES.AUTHORS}`,
              },
              {
                name: `${author.name}`,
              },
            ]}
          />
          <Badge badgeContent={author.photosessions.length} color="error">
            <Typography variant={'h2'}>Вот, все мои работы</Typography>
          </Badge>
          <PhotoSessionsList pagination={pagination} photosessions={author.photosessions} />
        </Container>

      </RootStyle>
    </Page>

  );
};

Photographer.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

export async function getStaticProps({ params }) {
  let a = await author(params.slug);
  return {
    props: {
      author: a,
    },
  };
}



export async function getStaticPaths() {
  const slugs = await authorsPaths();
  const params = [];
  slugs.map(({ slug }) => {
    const val = {
      params: {
        slug: `${slug}`,
      },
    };
    params.push(val);
  });
  return {
    paths: params,
    fallback: true,
  };
}

export default Photographer;