import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState('');

  const onClickTitle = () => {
    setSearchData('');

    // id로 데이터 넘기는 거 생각하기
    navigate('/movie-picker');
  };

  // 유효성 검사 필요
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
      onClickTitle={onClickTitle}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearchMovie={onClickSearchMovie}
      onKeyPressSearchInput={onKeyPressSearchInput}
    />
  );
};

export default SearchContainer;
