import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
// routes
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import { CONTACTS } from '../../config';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/assets/overlay.svg"
          variants={varFade().in}
        />

        <HeroImgStyle
          alt="hero"
          src="https://media.graphassets.com/output=format:png/resize=height:800,fit:max/ie9dN1gTCaMIuhHiD6gJ"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Давайте запечатлеем<br />
                частичку жизни
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;ВМЕСТЕ
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h5" sx={{fontWeight: 'medium', color: 'common.white' }}>
                Профессиональная фотосъемка свадеб и венчаний, детских праздников и дней рождений, влюбленных пар и всех желающих.
                Работаем как на выезде, так и в студии.
                Так же съемка товаров для маркет-плейсов, таких как вайлдберриз, озон и т.п.
              </Typography>
            </m.div>

            {/*<Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>*/}
            {/*  <m.div variants={varFade().inRight}>*/}
            {/*    <TextIconLabel*/}
            {/*      icon={*/}
            {/*        <Image*/}
            {/*          alt="sketch icon"*/}
            {/*          src="https://minimal-assets-api.vercel.app/assets/images/home/ic_sketch_small.svg"*/}
            {/*          sx={{ width: 20, height: 20, mr: 1 }}*/}
            {/*        />*/}
            {/*      }*/}
            {/*      value={*/}
            {/*        <Link*/}
            {/*          href="https://www.sketch.com/s/76388a4d-d6e5-4b7f-8770-e5446bfa1268"*/}
            {/*          target="_blank"*/}
            {/*          rel="noopener"*/}
            {/*          color="common.white"*/}
            {/*          sx={{ typography: 'body2' }}*/}
            {/*        >*/}
            {/*          Preview Sketch*/}
            {/*        </Link>*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </m.div>*/}

            {/*  <m.div variants={varFade().inRight}>*/}
            {/*    <TextIconLabel*/}
            {/*      icon={*/}
            {/*        <Image*/}
            {/*          alt="sketch icon"*/}
            {/*          src="https://minimal-assets-api.vercel.app/assets/images/home/ic_figma_small.svg"*/}
            {/*          sx={{ width: 20, height: 20, mr: 1 }}*/}
            {/*        />*/}
            {/*      }*/}
            {/*      value={*/}
            {/*        <Link*/}
            {/*          href="https://www.figma.com/file/x7earqGD0VGFjFdk5v2DgZ/%5BPreview%5D-Minimal-Web?node-id=866%3A55474"*/}
            {/*          target="_blank"*/}
            {/*          rel="noopener"*/}
            {/*          color="common.white"*/}
            {/*          sx={{ typography: 'body2' }}*/}
            {/*        >*/}
            {/*          Preview Figma*/}
            {/*        </Link>*/}
            {/*      }*/}
            {/*    />*/}
            {/*  </m.div>*/}
            {/*</Stack>*/}

            <m.div variants={varFade().inRight}>
              <NextLink href={CONTACTS.PHONE.LINK} passHref>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Iconify icon={'charm:phone-outgoing'} width={20} height={20} />}
                >
                  Позвонить нам
                </Button>
              </NextLink>
            </m.div>

            {/*<Stack spacing={2.5}>*/}
            {/*  <m.div variants={varFade().inRight}>*/}
            {/*    <Typography variant="overline" sx={{ color: 'primary.light' }}>*/}
            {/*      Available For*/}
            {/*    </Typography>*/}
            {/*  </m.div>*/}

            {/*  <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>*/}
            {/*    {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (*/}
            {/*      <m.img*/}
            {/*        key={resource}*/}
            {/*        variants={varFade().inRight}*/}
            {/*        src={`https://minimal-assets-api.vercel.app/assets/images/home/${resource}.svg`}*/}
            {/*      />*/}
            {/*    ))}*/}
            {/*  </Stack>*/}
            {/*</Stack>*/}
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
