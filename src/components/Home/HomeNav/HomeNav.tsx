import {
  NavContainer,
  NavBox,
  NavPopular,
  NavRecent,
  NavItemLabel,
} from './HomeNavStyled';

type HomeNavProps = {
  nowCursor: string;
  onClickPopular: any;
  onClickRecent: any;
};

export const HomeNav = ({
  nowCursor,
  onClickPopular,
  onClickRecent,
}: HomeNavProps) => {
  return (
    <NavContainer>
      <NavBox>
        <NavPopular nowcursor={nowCursor} onClick={onClickPopular}>
          <NavItemLabel>인기</NavItemLabel>
        </NavPopular>
        <NavRecent nowcursor={nowCursor} onClick={onClickRecent}>
          <NavItemLabel>개봉예정</NavItemLabel>
        </NavRecent>
      </NavBox>
    </NavContainer>
  );
};
