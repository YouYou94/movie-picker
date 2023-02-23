import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import {
  Loading,
  Nav,
  PageTemplate,
  SearchBar,
  Movies,
  Footer,
} from '../../components';
import { SEARCH } from '../../Constants';

const SearchContainer = () => {
  const param = useParams();
  const navigate = useNavigate();

  /* SearchBox */
  const [keyword, setKeyword] = useState<string>('');

  /* Search Movies */
  const { searchMovies, searchError, searchLoading }: any = useAxios({
    type: SEARCH,
    search_name: param.id ? param.id : '',
  });

  const onClickMovie = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    navigate(`/moviepicker/movie/${id}`);
  };

  useEffect(() => {
    if (searchError) alert(`에러 ! ${searchError}`);
  }, [searchError]);

  return (
    <PageTemplate>
      <SearchBar state={keyword} setState={setKeyword} />
      <Nav searchKeyword={param.id ? param.id : ''} />
      {searchLoading ? (
        <Loading />
      ) : (
        <Movies
          type={SEARCH}
          movies={searchMovies}
          searchKeyword={param.id ? param.id : ''}
          onHandleClick={onClickMovie}
        />
      )}
      <Footer />
    </PageTemplate>
  );
};

export default SearchContainer;
