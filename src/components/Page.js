import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
import { CONFIG } from '../config';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | ${CONFIG.SITE_NAME}`}</title>
      {/*{meta.length && meta.map(({name, content}) =>{*/}
      {/*  return `<meta name=${name} content=${content} />`*/}
      {/*})}*/}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.array,
};

export default Page;
