import {
  Box,
  SearchBox,
  SearchInput,
  SearchList,
  SearchItem,
} from './MainSearch.styled';

const MainSearchPresenter = () => {
  return (
    <Box>
      <SearchBox>
        <SearchInput />
      </SearchBox>
      {/* <SearchList>
        <SearchItem>가나다라</SearchItem>
        <SearchItem>가나다라</SearchItem>
      </SearchList> */}
    </Box>
  );
};

export default MainSearchPresenter;
