import { useNavigate } from 'react-router';
import { NavLayout, NavBox, SearchResultBox, NavHashTag } from './NavStyled';

type NavProps = {
  searchKeyword: string;
};

export const Nav = ({ searchKeyword }: NavProps) => {
  const navigate = useNavigate();

  return (
    <NavLayout>
      <NavBox>
        <NavHashTag onClick={() => navigate('/moviepicker')}>#HOME</NavHashTag>
      </NavBox>
      <SearchResultBox>
        {searchKeyword ? (
          <NavHashTag isSelect={Boolean(searchKeyword)}>
            #검색 #{searchKeyword}
          </NavHashTag>
        ) : (
          <></>
        )}
      </SearchResultBox>
    </NavLayout>
  );
};
