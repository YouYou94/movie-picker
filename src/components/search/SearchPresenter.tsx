import * as Styled from './SearchStyled';

type SearchProps = {
  searchData: string;
  onChangeSearchInput: any;
};

const SearchPresenter = ({ searchData, onChangeSearchInput }: SearchProps) => {
  return (
    <Styled.Layout>
      <Styled.TitleBox>
        <Styled.Title>MOVIE PICKER</Styled.Title>
      </Styled.TitleBox>
      <Styled.SearchBox>
        <Styled.SearchInput
          value={searchData}
          onChange={onChangeSearchInput}
          placeholder="검색어를 입력해주세요."
        />
        <Styled.SearchButton>검색</Styled.SearchButton>
      </Styled.SearchBox>
    </Styled.Layout>
  );
};

export default SearchPresenter;
