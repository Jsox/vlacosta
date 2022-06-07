// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, InputAdornment, Stack, Typography } from '@mui/material';
// hooks
import useCountdown from '../hooks/useCountdown';
// layouts
// components
import InputStyle from '../components/InputStyle';
import SocialsButton from '../components/SocialsButton';
// assets
import { ComingSoonIllustration } from '../assets';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

// ComingSoon.getLayout = function getLayout(page) {
//   return <Layout variant="logoOnly">{page}</Layout>;
// };

// ----------------------------------------------------------------------

export default function ComingSoon({toDateTime = '06/09/2022 21:30'}) {
  const countdown = useCountdown(new Date(toDateTime));

  return (
    <RootStyle>
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Скоро эта страница появится!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Мы работаем над этой страницей в данный момент!</Typography>

          <ComingSoonIllustration sx={{ my: 10, height: 240 }} />

          <Typography сcomponent={'div'} variant="h3">Будет готово примено через:</Typography>
          <CountdownStyle>
            <div>
              <Typography variant="h2">{countdown.days}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Дней</Typography>
            </div>

            <SeparatorStyle variant="h2">:</SeparatorStyle>

            <div>
              <Typography variant="h2">{countdown.hours}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Часов</Typography>
            </div>

            <SeparatorStyle variant="h2">:</SeparatorStyle>

            <div>
              <Typography variant="h2">{countdown.minutes}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Минут</Typography>
            </div>

            <SeparatorStyle variant="h2">:</SeparatorStyle>

            <div>
              <Typography variant="h2">{countdown.seconds}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>Секунд</Typography>
            </div>
          </CountdownStyle>

          {/*<InputStyle*/}
          {/*  fullWidth*/}
          {/*  placeholder="Enter your email"*/}
          {/*  InputProps={{*/}
          {/*    endAdornment: (*/}
          {/*      <InputAdornment position="end">*/}
          {/*        <Button variant="contained" size="large">*/}
          {/*          Notify Me*/}
          {/*        </Button>*/}
          {/*      </InputAdornment>*/}
          {/*    ),*/}
          {/*  }}*/}
          {/*  sx={{ my: 5, '& .MuiOutlinedInput-root': { pr: 0.5 } }}*/}
          {/*/>*/}

          {/*<Stack alignItems="center">*/}
          {/*  <SocialsButton size="large" initialColor />*/}
          {/*</Stack>*/}
        </Box>
      </Container>
    </RootStyle>
  );
}