import { useState } from 'react';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {
  const [searchData, setSearchData] = useState('');

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchData(value);
  };

  return (
    <SearchPresenter
      searchData={searchData}
      onChangeSearchInput={onChangeSearchInput}
    />
  );
};

export default SearchContainer;
