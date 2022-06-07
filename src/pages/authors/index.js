// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import ComingSoon from '../../components/ComingSoon';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

Authors.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Authors() {
  return (
    <Page title="Все авторы">
      <ComingSoon />
    </Page>
  );
}
