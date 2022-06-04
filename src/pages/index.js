// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { HomeHero } from '../sections/home';
import PhotoSessionsList from '../components/photosessions/PhotoSessionsList';
import { lastPhotosessions } from '../utils/api';
import usePagination from '../hooks/usePagination';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage({ photosessions }) {
  const pagination = usePagination();
  return (
    <Page title='Заказать профессиональную фотосессию'>
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <Container>
            <Typography sx={{pt:4}} variant={'h2'}>Последние фотосессии</Typography>
            <PhotoSessionsList sessionsOnPage={3} photosessions={photosessions} pagination={pagination} />
          </Container>
          {/*<HomeMinimal />*/}

          {/*<HomeHugePackElements />*/}

          {/*<HomeDarkMode />*/}

          {/*<HomeColorPresets />*/}

          {/*<HomeCleanInterfaces />*/}

          {/*<HomePricingPlans />*/}

          {/*<HomeLookingFor />*/}

          {/*<HomeAdvertisement />*/}
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

export async function getStaticProps() {
  const photosessions = await lastPhotosessions(12);
  return {
    props: {
      photosessions: photosessions,
    },
    revalidate: 60 * 60,
  };
}