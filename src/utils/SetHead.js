import React from 'react';
import { CONFIG } from '../config';
import getMetaDescriptionText from './getMetaDescriptionText';
import Head from 'next/head';

const SetHead = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title} | ${CONFIG.SITE_NAME}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SetHead;