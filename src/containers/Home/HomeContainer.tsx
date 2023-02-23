import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Footer,
  Header,
  Loading,
  Movies,
  PageTemplate,
  SearchBar,
  Trailer,
} from '../../components';
import { POPULAR, UPCOMING } from '../../Constants';
import useAxios from '../../hooks/useAxios';

const HomeContainer = () => {
  const navigate = useNavigate();

  const { popularMovies, popularError, popularLoading } = useAxios({
    type: POPULAR,
  });

  const { upcomingMovies, upcomingError, upcomingLoading } = useAxios({
    type: UPCOMING,
  });

  const onClickMovie = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  /* Search */
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    if (popularError) alert(popularError);
  }, [popularError]);

  useEffect(() => {
    if (upcomingError) alert(upcomingError);
  }, [upcomingError]);

  return (
    <PageTemplate>
      <Header />
      <Trailer />
      <SearchBar state={keyword} setState={setKeyword} />
      {popularLoading ? (
        <Loading />
      ) : (
        <Movies
          type={POPULAR}
          movies={popularMovies}
          onHandleClick={onClickMovie}
        />
      )}
      {upcomingLoading ? (
        <Loading />
      ) : (
        <Movies
          type={UPCOMING}
          movies={upcomingMovies}
          onHandleClick={onClickMovie}
        />
      )}
      <Footer />
    </PageTemplate>
  );
};

export default HomeContainer;
