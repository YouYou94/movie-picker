import { NavLayout, NavBox, SearchResultBox, NavHashTag } from './NavStyled';

type NavProps = {
  isPopular?: boolean;
  isUpcoming?: boolean;
  onClickPopular?: any;
  onClickRecent?: any;
};

export const Nav = ({
  isPopular,
  isUpcoming,
  onClickPopular,
  onClickRecent,
}: NavProps) => {
  return (
    <NavLayout>
      <NavBox>
        <NavHashTag isSelect={isPopular} onClick={onClickPopular}>
          #인기
        </NavHashTag>
        <NavHashTag isSelect={isUpcoming} onClick={onClickRecent}>
          #최신
        </NavHashTag>
      </NavBox>
      <SearchResultBox></SearchResultBox>
    </NavLayout>
  );
};
