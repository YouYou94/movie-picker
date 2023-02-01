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
          <NavItemLabel>TOP 20</NavItemLabel>
        </NavPopular>
        <NavRecent nowcursor={nowCursor} onClick={onClickRecent}>
          <NavItemLabel>UPCOMING</NavItemLabel>
        </NavRecent>
      </NavBox>
    </NavContainer>
  );
};
