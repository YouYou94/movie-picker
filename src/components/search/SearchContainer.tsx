import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchData(value);
  };

  const onClickSearchMovie = () => {
    navigate('/movie-picker/result', {
      state: {
        searchData,
      },
    });
  };

  const onKeyPressSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') onClickSearchMovie();
  };

  return (
    <SearchPresenter
      searchData={searchData}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearchMovie={onClickSearchMovie}
      onKeyPressSearchInput={onKeyPressSearchInput}
    />
  );
};

export default SearchContainer;
