import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import {
  HomeNav,
  Template,
  Search,
  HomeMovies,
  Loading,
} from '../../components';
import useAxios from '../../hooks/useAxios';

const POPULAR = 'movie/popular';
const POPULAR_URL = '/moviepicker/popular';

const UPCOMING = 'movie/upcoming';
const UPCOMING_URL = '/moviepicker/upcoming';

const HomeContainer = () => {
  const navigate = useNavigate();

  /* Search 동작 */
  const [keyword, setKeyword] = useState('');

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setKeyword(value);
  };

  /* Nav 동작*/
  const [nowCursor, setNowCursor] = useState(POPULAR);

  const onClickPopular = () => {
    navigate(POPULAR_URL);

    setNowCursor(POPULAR);
  };

  const onClickRecent = () => {
    navigate(UPCOMING_URL);

    setNowCursor(UPCOMING);
  };

  /* Movies */
  const { movies, error, loading }: any = useAxios({ sub_url: nowCursor });

  const onClickMoive = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  useEffect(() => {
    if (error) alert(`에러 ! ${error}`);
  }, [error]);

  return (
    <Template>
      <Search state={keyword} onChangeHandler={onChangeSearchKeyword} />
      <HomeNav
        nowCursor={nowCursor}
        onClickPopular={onClickPopular}
        onClickRecent={onClickRecent}
      />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<HomeMovies movies={movies} onClickMoive={onClickMoive} />}
          />
          <Route
            path="/upcoming"
            element={<HomeMovies movies={movies} onClickMoive={onClickMoive} />}
          />
        </Routes>
      )}
    </Template>
  );
};

export default HomeContainer;
