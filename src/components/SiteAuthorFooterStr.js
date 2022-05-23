import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const SiteAuthorFooterStr = () => {
  const theme = useTheme();
  return (
    <><Typography
      component="p"
      variant="body2"
      sx={{
        mt: 10,
        mb: 1.5,
        fontSize: 13,
        textAlign: { xs: 'center', md: 'center' },
      }}
    >
      © 2020-2022. Все права защищены. Любые материалы с данного сайта запрещается копировать и использовать без ведома
      правообладателя.
    </Typography>
      <Typography align={'center'} sx={{ pb: 5 }} color="primary" variant={'body1'}>Сайт создан Компанией
        <Button sx={{
          color: 'white',
          px: 2,
          py: 0,
          ml: 1,
        }}  style={{background: `linear-gradient(to right bottom, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`}}
                href="https://jsix.ru" size="small" variant="filled">JSix.ru</Button>
      </Typography>
    </>
  );
};

export default SiteAuthorFooterStr;