import { useEffect } from 'react';
import {
  Footer,
  HeaderRefactor,
  Loading,
  Movies,
  PageTemplate,
  SearchBar,
  Trailer,
} from '../../components';
import { POPULAR, UPCOMING } from '../../Constants';
import useAxios from '../../hooks/useAxios';

const HomeContainer_ = () => {
  const { popularMovies, popularError, popularLoading } = useAxios({
    type: POPULAR,
  });

  const { upcomingMovies, upcomingError, upcomingLoading } = useAxios({
    type: UPCOMING,
  });

  useEffect(() => {
    if (popularError) alert(popularError);
  }, [popularError]);

  useEffect(() => {
    if (upcomingError) alert(upcomingError);
  }, [upcomingError]);

  return (
    <PageTemplate>
      <HeaderRefactor />
      <Trailer />
      <SearchBar />
      {popularLoading ? (
        <Loading />
      ) : (
        <Movies type={POPULAR} movies={popularMovies} />
      )}
      {upcomingLoading ? (
        <Loading />
      ) : (
        <Movies type={UPCOMING} movies={upcomingMovies} />
      )}
      <Footer />
    </PageTemplate>
  );
};

export default HomeContainer_;
