import { photosession, photosessionsPaths } from '../../../utils/api';
import { styled } from '@mui/material/styles';
import Layout from '../../../layouts';
import Page from '../../../components/Page';
import { Container } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

Slug.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

export default function Slug({ data }) {
  const {
    title,
    content,
  } = data;

  const meta = {
    description: content.text.slice(0, 255),
  };
  return (
    <Page title={`${title}`} {...meta}>
      <RootStyle>
        <Container>

          {title}
        </Container>
      </RootStyle>
    </Page>
  );
};

export async function getStaticProps({ params }) {
  const data = await photosession(params.slug);
  console.log(params.slug);
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
  // const categorySlugs = await categoriesPaths();
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