import { useEffect, useState } from 'react';

export default function usePagination() {
  const getHashPage = () => {
    return parseInt(window.location.hash.replace('#page-', '')) || 1;
  };
  const [page, setPage] = useState(getHashPage());
  const [titleAddon, setTitleAddon] = useState('');

  const setHash = hash => {
    if (history.pushState) {
      if (!hash)
        history.replaceState(null, null, ' ');
      else
        history.pushState(null, null, `${hash}`);
    } else {
      window.location.hash = `${hash}`;
    }
  };


  useEffect(() => {
    addEventListener('hashchange', event => {
      if (getHashPage() != page)
        setPage(getHashPage());
    });
    if (page == 1) {
      setHash('');
      setTitleAddon('');
    } else {
      setHash(`#page-${page}`);
      setTitleAddon(`| Страница ${page}`);
    }
  }, [page]);

  return {
    page,
    setPage: (newPage) => setPage(newPage),
    titleAddon,
  };
}