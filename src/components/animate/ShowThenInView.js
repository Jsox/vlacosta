import { m } from 'framer-motion';
import { Box } from '@mui/material';

export default function FadeInWhenVisible({ delay = 0, variant = 'inDown', children, sx, component = 'div', duration = 0.3, ...other }) {
  const distance = 120;
  const variants = {
    inDown: {
      visible: { opacity: 1, scale: 1, y: 0 },
      hidden: { opacity: 0, scale: .7, y: distance },
      exit: { y: distance, opacity: 0 },
    },
  };
  return (
    <Box
      {...other}
      {...sx}
      component={m[component]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: delay, duration: duration, ease: 'easeOut' }}
      variants={variants[variant]}
    >
      {children}
    </Box>
  );
}