import {
  SearchLayout,
  SearchBox,
  SearchInput,
  SearchButton,
  SearchImage,
} from './SearchStyled';

type SearchProps = {
  state?: string;
  onChangeHandler?: any;
  onKeyPressHandler?: any;
  onClickHandler?: any;
};

export const Search = ({
  state,
  onChangeHandler,
  onKeyPressHandler,
  onClickHandler,
}: SearchProps) => {
  return (
    <SearchLayout>
      <SearchBox>
        <SearchInput
          value={state}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          placeholder="검색할 영화를 입력해주세요."
        />
        <SearchButton onClick={onClickHandler}>
          <SearchImage />
        </SearchButton>
      </SearchBox>
    </SearchLayout>
  );
};
