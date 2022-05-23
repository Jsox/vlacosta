import Typography from '@mui/material/Typography';

function createMarkup(html) {
  return {__html: html};
}

const DangerSetHtml = ({html}) => {
  return <Typography variant={'p'} dangerouslySetInnerHTML={createMarkup(html)} />;
};

export default DangerSetHtml;
