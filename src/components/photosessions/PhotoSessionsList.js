import Grid from '@mui/material/Grid';
import PhotoSessionCard from './PhotoSessionCard';
import { Box, Pagination } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PaginationItem from '@mui/material/PaginationItem';

const PhotoSessionsList = ({ photosessions: allPhotosessions, sessionsOnPage = 6, pagination }) => {
  let { page, setPage } = pagination;

  const topOfSessions = useRef();

  function goToTopOfSessions() {
    topOfSessions.current.scrollIntoView({ behavior: 'smooth' });
  }

  const totalPages = Math.ceil(allPhotosessions.length / sessionsOnPage);
  if (page > totalPages) setPage(totalPages);

  const getPhotosessions = () => {
    let from = (page - 1) * sessionsOnPage;
    let to = from + sessionsOnPage;
    return allPhotosessions.slice(from, to);
  };

  let [photosessions, setPhotosessions] = useState(getPhotosessions);

  const handlePageChange = (event, value) => {
    goToTopOfSessions();
    setPage(value);
  };

  useEffect(() => {
    setPhotosessions(getPhotosessions);
  }, [page]);

  return (<>
      <Grid ref={topOfSessions} sx={{ mt: 4, mb: 2 }} container spacing={2}>
        {photosessions.map(photosession => (
          <Grid key={photosession.slug} item xs={12} sm={6} lg={4}>
            <PhotoSessionCard item={photosession} />
          </Grid>
        ))}
      </Grid>
      {allPhotosessions.length > sessionsOnPage && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination
          onChange={handlePageChange}
          page={page}
          count={totalPages}
          color="error"
          renderItem={(item) => {
            if (item.page != 1) item.href = `#page-${item.page}`;
            return <PaginationItem
              component={'a'}
              {...item}
            />;
          }}
        />
      </Box>}
    </>
  );
};

export default PhotoSessionsList;