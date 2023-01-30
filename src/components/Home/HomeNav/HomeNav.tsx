import { useState } from 'react';
import {
  NavContainer,
  NavBox,
  NavPopular,
  NavRecent,
  NavItemLabel,
} from './HomeNavStyled';

const POPULAR = 'popular';
const RECENT = 'recent';

export const HomeNav = () => {
  const [nowCursor, setNowCursor] = useState(POPULAR);

  const onClickPopular = () => setNowCursor(POPULAR);

  const onClickRecent = () => setNowCursor(RECENT);

  return (
    <NavContainer>
      <NavBox>
        <NavPopular nowcursor={nowCursor} onClick={onClickPopular}>
          <NavItemLabel>인기</NavItemLabel>
        </NavPopular>
        <NavRecent nowcursor={nowCursor} onClick={onClickRecent}>
          <NavItemLabel>최신</NavItemLabel>
        </NavRecent>
      </NavBox>
    </NavContainer>
  );
};
