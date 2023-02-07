import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router';
import {
  HomeNav,
  Search,
  HomeMovies,
  Loading,
  PageTemplate,
  Header,
} from '../../components';
import useAxios from '../../hooks/useAxios';

const POPULAR = 'movie/popular';
const POPULAR_URL = '/moviepicker/popular';

const UPCOMING = 'movie/upcoming';
const UPCOMING_URL = '/moviepicker/upcoming';

const HomeContainer = () => {
  const navigate = useNavigate();

  /* Search 동작 */
  const [keyword, setKeyword] = useState<string>('');

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setKeyword(value);
  };

  const onClickSearchIcon = () => {
    navigate(`/moviepicker/search/${keyword}`);
  };

  const onKeyPressSearchEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (!keyword) {
        alert('검색창 안의 값을 입력해주세요!');
        return;
      } else onClickSearchIcon();
    }
  };

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

  const onClickMoive = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  useEffect(() => {
    if (error) alert(`에러 ! ${error}`);
  }, [error]);

  return (
    <PageTemplate>
      <Header />
      <Search
        state={keyword}
        onChangeHandler={onChangeSearchKeyword}
        onClickHandler={onClickSearchIcon}
        onKeyPressHandler={onKeyPressSearchEnter}
      />
      <HomeNav
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
            element={<HomeMovies movies={movies} onClickMoive={onClickMoive} />}
          />
          <Route
            path="/upcoming"
            element={<HomeMovies movies={movies} onClickMoive={onClickMoive} />}
          />
        </Routes>
      )}
    </PageTemplate>
  );
};

export default HomeContainer;
