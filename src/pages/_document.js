
import Document, { Html, Head, Main, NextScript } from 'next/document';
// emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
// theme
import palette from '../theme/palette';
import React from 'react';

// ----------------------------------------------------------------------

function createEmotionCache() {
  return createCache({ key: 'css' });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

          <meta name="theme-color" content={palette.light.primary.main} />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Фотограф в Новороссийске, Анапе, Геленджике и окрестностях. Заказать фотосессию."
          />
          <meta name="keywords" content="фото, фотограф, Новороссийск, фотостудия" />
          <meta name="author" content="JSix.ru" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider value={cache}>
            <App {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
