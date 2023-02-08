import { useNavigate } from 'react-router';
import {
  SearchLayout,
  SearchBox,
  SearchInput,
  SearchButton,
  SearchImage,
} from './SearchBarStyled';

type SearchProps = {
  state: string;
  setState: any;
};

export const SearchBar = ({ state, setState }: SearchProps) => {
  const navigate = useNavigate();

  const onChangeSearchKeyword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setState(value);
  };

  const onClickSearchIcon = () => {
    navigate(`/moviepicker/search/${state}`);
  };

  const onKeyPressSearchEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (!state) {
        alert('검색창 안의 값을 입력해주세요!');
        return;
      } else onClickSearchIcon();
    }
  };

  return (
    <SearchLayout>
      <SearchBox>
        <SearchInput
          value={state}
          onChange={onChangeSearchKeyword}
          onKeyPress={onKeyPressSearchEnter}
          placeholder="Enter a movie to search for."
        />
        <SearchButton onClick={onClickSearchIcon}>
          <SearchImage />
        </SearchButton>
      </SearchBox>
    </SearchLayout>
  );
};
