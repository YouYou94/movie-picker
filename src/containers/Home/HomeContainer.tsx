import React, { useState } from 'react';
import {
  HomeNav,
  Template,
  Search,
  PopularMovies,
  Loading,
} from '../../components';
import useAxios from '../../hooks/useAxios';

const POPULAR = 'movie/popular';
const UPCOMING = 'movie/upcoming';

const HomeContainer = () => {
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

  const onClickPopular = () => setNowCursor(POPULAR);

  const onClickRecent = () => setNowCursor(UPCOMING);

  /* Movies Data */
  const { data, error, loading } = useAxios({ sub_url: nowCursor });

  /* Popular Movies */

  /* Recent Movies */

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
        <>
          {nowCursor === POPULAR ? <PopularMovies /> : <></>}
          {nowCursor === UPCOMING ? <></> : <></>}
        </>
      )}
    </Template>
  );
};

export default HomeContainer;
