import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import {
  Header,
  Loading,
  Nav,
  PageTemplate,
  SearchBar,
  Movies,
} from '../../components';

const POPULAR_URL = '/moviepicker/popular';
const UPCOMING_URL = '/moviepicker/upcoming';
const SEARCH = 'search/movie';

const SearchContainer = () => {
  const param = useParams();
  const navigate = useNavigate();

  /* SearchBox */
  const [keyword, setKeyword] = useState<string>('');

  /* Nav */
  const onClickPopular = () => navigate(POPULAR_URL);

  const onClickRecent = () => navigate(UPCOMING_URL);

  /* Search Movies */
  const { movies, error, loading }: any = useAxios({
    sub_url: SEARCH,
    search_name: param.id ? param.id : '',
  });

  const onClickMovie = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  useEffect(() => {
    if (error) alert(`에러 ! ${error}`);
  }, [error]);

  console.log(movies);

  return (
    <PageTemplate>
      <Header />
      <SearchBar state={keyword} setState={setKeyword} />
      <Nav
        searchKeyword={param.id ? param.id : ''}
        onClickPopular={onClickPopular}
        onClickRecent={onClickRecent}
      />
      {loading ? (
        <Loading />
      ) : (
        <Movies movies={movies} onHandleClick={onClickMovie} />
      )}
    </PageTemplate>
  );
};

export default SearchContainer;
