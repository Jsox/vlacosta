import { photosessions } from '../../utils/api';
import React from 'react';
import Layout from '../../layouts';
import Page from '../../components/Page';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import PhotosessionsShowMultiple from '../../components/photosessions/showMultiple';
import getMetaDescriptionText from '../../utils/getMetaDescriptionText';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

Photosessions.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

export default function Photosessions({ data }) {
  const { themeStretch } = useSettings();
  let mdesc = '';
  {
    data &&
    data.map(({ title }) => {
      mdesc += title + ', ';
    });
  }
  mdesc = mdesc.substring(0, mdesc.length - 2);
  const metaDescription = getMetaDescriptionText('Примеры фотосессий из категорий: ' + mdesc);
  return (
    <Page title={`Примеры фотосессий всех направлений нашей Студии`}
          meta={
            <meta
              name="description"
              content={metaDescription}
            />
          }>
      <RootStyle>
        <Container maxWidth={themeStretch ? false : 'lg'}>

          <HeaderBreadcrumbs
            heading="Крайние фотосессии"
            links={[
              { name: 'Главная', href: '/' },
              {
                name: 'Примеры фотосессий',
              },
            ]}
          />

          {data && data.map((
            {
              id,
              title,
              slug,
              description: {
                text,
                html,
              },
              photosessions,
            },
          ) => {

            if (!slug || photosessions.length === 0) {
              return null;
            }
            return <PhotosessionsShowMultiple
              key={id}
              text={text}
              photosessions={photosessions}
              actionButton={{
                link: `/photosessions/${slug}`,
                text: `Все ${title}`,
              }}
              title={title}
              subheader={`Показаны крайние ${photosessions.length} шт.`} />;

          })
          }

        </Container>
      </RootStyle>
    </Page>
  );
};

export async function getStaticProps() {

  const data = await photosessions();
  return {
    props: {
      data: data,
    },
    revalidate: 60 * 60,
  };
}
