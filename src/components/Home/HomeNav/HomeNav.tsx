import {
  NavLayout,
  NavBox,
  SearchResultBox,
  NavHashTag,
} from './HomeNavStyled';

type HomeNavProps = {
  isPopular: boolean;
  isUpcoming: boolean;
  onClickPopular: any;
  onClickRecent: any;
};

export const HomeNav = ({
  isPopular,
  isUpcoming,
  onClickPopular,
  onClickRecent,
}: HomeNavProps) => {
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
