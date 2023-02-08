import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import useAxios from '../../hooks/useAxios';
import {
  Nav,
  Search,
  Movies,
  Loading,
  PageTemplate,
  Header,
} from '../../components';

const POPULAR = 'movie/popular';
const POPULAR_URL = '/moviepicker/popular';

const UPCOMING = 'movie/upcoming';
const UPCOMING_URL = '/moviepicker/upcoming';

const HomeContainer = () => {
  const navigate = useNavigate();

  /* Search 동작 */
  const [keyword, setKeyword] = useState<string>('');

  /* Nav 동작*/
  const [isPopular, setIsPupular] = useState<boolean>(true);
  const [isUpcoming, setIsUpcoming] = useState<boolean>(false);
  const [nowCursor, setNowCursor] = useState<string>(POPULAR);

  const onClickPopular = () => {
    navigate(POPULAR_URL);

    setNowCursor(POPULAR);
    setIsPupular(true);
    setIsUpcoming(false);
  };

  const onClickRecent = () => {
    navigate(UPCOMING_URL);

    setNowCursor(UPCOMING);
    setIsPupular(false);
    setIsUpcoming(true);
  };

  /* Movies */
  const { movies, error, loading }: any = useAxios({ sub_url: nowCursor });

  const onClickMovie = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  useEffect(() => {
    if (error) alert(`에러 ! ${error}`);
  }, [error]);

  return (
    <PageTemplate>
      <Header />
      <Search state={keyword} setState={setKeyword} />
      <Nav
        isPopular={isPopular}
        isUpcoming={isUpcoming}
        onClickPopular={onClickPopular}
        onClickRecent={onClickRecent}
      />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<Movies movies={movies} onClickMovie={onClickMovie} />}
          />
          <Route
            path="/upcoming"
            element={<Movies movies={movies} onClickMovie={onClickMovie} />}
          />
        </Routes>
      )}
    </PageTemplate>
  );
};

export default HomeContainer;
