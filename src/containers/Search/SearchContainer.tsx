import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import {
  Header,
  Loading,
  Nav,
  PageTemplate,
  Search,
  SearchMovies,
} from '../../components';

const POPULAR_URL = '/moviepicker/popular';
const UPCOMING_URL = '/moviepicker/upcoming';
const SEARCH = 'search/movie';

const SearchContainer = () => {
  const param = useParams();
  const navigate = useNavigate();

  /* Nav */

  const onClickPopular = () => navigate(POPULAR_URL);

  const onClickRecent = () => navigate(UPCOMING_URL);

  /* Search */
  const { movies, error, loading }: any = useAxios({
    sub_url: SEARCH,
    search_name: param.id ? param.id : '',
  });

  useEffect(() => {
    if (error) alert(`에러 ! ${error}`);
  }, [error]);

  return (
    <PageTemplate>
      <Header />
      <Search />
      <Nav
        searchKeyword={param.id ? param.id : ''}
        onClickPopular={onClickPopular}
        onClickRecent={onClickRecent}
      />
      {loading ? <Loading /> : <SearchMovies />}
    </PageTemplate>
  );
};

export default SearchContainer;
