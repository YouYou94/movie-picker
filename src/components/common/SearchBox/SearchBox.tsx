import {
  SearchLayout,
  SearchBox,
  SearchInput,
  SearchButton,
  SearchImage,
} from './SearchBoxStyled';

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
          placeholder="Enter a movie to search for."
        />
        <SearchButton onClick={onClickHandler}>
          <SearchImage />
        </SearchButton>
      </SearchBox>
    </SearchLayout>
  );
};
