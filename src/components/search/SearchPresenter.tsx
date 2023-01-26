import * as Styled from './SearchStyled';

const SearchPresenter = () => {
  return (
    <Styled.Layout>
      <Styled.TitleBox>
        <Styled.Title>MOVIE PICKER</Styled.Title>
      </Styled.TitleBox>
      <Styled.SearchBox>
        <Styled.SearchInput />
        <Styled.SearchButton>검색</Styled.SearchButton>
      </Styled.SearchBox>
    </Styled.Layout>
  );
};

export default SearchPresenter;
