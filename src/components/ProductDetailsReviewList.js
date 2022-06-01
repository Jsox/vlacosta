import React, { useState } from 'react';
// @mui
import { Avatar, Box, Button, List, ListItem, Pagination, Rating, Typography } from '@mui/material';
// utils
import { fDate, fToNow } from '../utils/formatTime';
import { fShortenNumber } from '../utils/formatNumber';
// components
import Iconify from './Iconify';
import TypographyDangerSetHtml from '../utils/dangerSetHtml';
import FadeInWhenVisible from './animate/ShowThenInView';
// ----------------------------------------------------------------------

export default function ProductDetailsReviewList({ reviews = [] }) {

  return (
    <Box sx={{ pt: 3, px: 2, pb: 5 }}>
      <List disablePadding>
        {reviews.map((review, i) => (
          <FadeInWhenVisible delay={i * 0.3} key={review.id}>
            <ReviewItem even={i % 2} review={review} />
          </FadeInWhenVisible>
        ))}
      </List>
      {reviews.length > 10 && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination count={10} color="primary" />
      </Box>}
    </Box>
  );
}

// ----------------------------------------------------------------------

function ReviewItem({even, review }) {
  const {
    person,
    rating,
    comment,
    createdAt,
    helpful: nowHelpful,
    date: postedAt,
    isPurchased = true,
  } = review;

  const [isHelpful, setHelpfuls] = useState(false);
  const [helpful, setHelpful] = useState(nowHelpful || 5);

  const handleClickHelpful = () => {
    setHelpfuls((prev) => (!prev));
    isHelpful ? setHelpful(helpful - 1) : setHelpful(helpful + 1);
  };

  return (
    <ListItem
      disableGutters
      sx={{
        mb: 5,
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          mb: { xs: 2, sm: 0 },
          minWidth: { xs: 160, md: 240 },
          textAlign: { sm: 'center' },
          flexDirection: { sm: 'column' },
        }}
      >
        <Avatar
          src={person?.avatar?.url}
          alt={person?.name || 'Пользователь'}
          sx={{
            mr: { xs: 2, sm: 0 },
            mb: { sm: 2 },
            width: { md: 64 },
            height: { md: 64 },
          }}
        />
        <Box>
          <Typography variant="subtitle2" noWrap>
            {person?.name || 'Пользователь'}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
            {fDate((postedAt || createdAt))}<br />({fToNow((postedAt || createdAt))})
          </Typography>
        </Box>
      </Box>

      <div>
        <Rating size="medium" value={rating} precision={1} readOnly />
        {isPurchased && (
          <Typography
            variant="caption"
            sx={{
              my: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main',
            }}
          >
            <Iconify icon={'ic:round-verified'} width={16} height={16} />
            &nbsp;Заказчик
          </Typography>
        )}

        <TypographyDangerSetHtml variant="body2">{comment.html}</TypographyDangerSetHtml>

        <Box
          sx={{
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {!isHelpful && (
            <Typography variant="body2" sx={{ mr: 1 }}>
              Нравится?
            </Typography>
          )}

          <Button
            size="small"
            color="inherit"
            startIcon={<Iconify icon={!isHelpful ? 'ic:round-thumb-up' : 'eva:checkmark-fill'} />}
            onClick={handleClickHelpful}
          >
            {isHelpful ? 'Понравилось!' : 'Лайк!'} ({fShortenNumber(helpful)})
          </Button>
        </Box>
      </div>
    </ListItem>
  );
}
