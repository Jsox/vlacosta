import Typography from '@mui/material/Typography';

function createMarkup(html) {
  return { __html: html };
}

const TypographyDangerSetHtml = ({ html = '', children, variant = 'body1', component='div',  ...other }) => {
  return <Typography {...other} component={component} variant={variant} dangerouslySetInnerHTML={createMarkup(children)} />;
};

export default TypographyDangerSetHtml;
