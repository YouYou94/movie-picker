import styled from 'styled-components';

export const HeaderLayout = styled.header`
  height: 5rem;

  border-bottom: 1px solid rgb(47, 47, 47);
`;

export const HeaderBox = styled.div`
  height: 100%;

  display: flex;

  margin: 0 10rem;
`;

/* Header Title */
export const HeaderTitleBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h2``;

/* Header Nav */
export const HeaderNavBox = styled.nav`
  flex: 3;

  display: flex;
  align-items: center;
`;

/* Header Search */
export const HeaderSearchBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`;
