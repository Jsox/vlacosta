import { m } from 'framer-motion';
import { Box } from '@mui/material';
import { varTranExit } from './variants';

export default function FadeInWhenVisible({ variant = 'inDown', children, sx, component = 'div', duration = 0.3, ...other }) {
  const distance = 120;
  const variants = {
    inDown: {
      visible: { opacity: 1, scale: 1, y: 0 },
      hidden: { opacity: 0, scale: 0.5, y: -distance },
      exit: { y: -distance, opacity: 0 },
    }
  }
  return (
    <Box
      {...other}
      {...sx}
      component={m[component]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: duration }}
      variants={variants[variant]}
    >
      {children}
    </Box>
  );
}