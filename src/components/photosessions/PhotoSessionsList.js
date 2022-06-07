import Grid from '@mui/material/Grid';
import PhotoSessionCard from './PhotoSessionCard';
import { Box, Pagination } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PaginationItem from '@mui/material/PaginationItem';
import useResponsive from '../../hooks/useResponsive';

const PhotoSessionsList = ({
                             grid = {
                               xs: 12,
                               sm: 6,
                               lg: 4,
                             }, photosessions: allPhotosessions, sessionsOnPage = 6, pagination,
                           }) => {
  let { page, setPage } = pagination;

  const topOfSessions = useRef();

  const isDesktop = useResponsive('up', 'md');
  const [sop, setSop] = useState(sessionsOnPage);

  useEffect(() => {
    setSop(isDesktop ? sessionsOnPage : Math.ceil(sessionsOnPage / 2));
  }, [isDesktop]);

  function goToTopOfSessions() {
    topOfSessions.current.scrollIntoView({ behavior: 'smooth' });
  }

  const totalPages = Math.ceil(allPhotosessions.length / sop);
  if (page > totalPages) setPage(totalPages);

  const getPhotosessions = () => {
    let from = (page - 1) * sop;
    let to = from + sop;
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
        {photosessions.map((photosession, i) => (
          <Grid key={photosession.slug} item {...grid} >
            <PhotoSessionCard item={photosession} index={i} />
          </Grid>
        ))}
      </Grid>
      {allPhotosessions.length > sop && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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