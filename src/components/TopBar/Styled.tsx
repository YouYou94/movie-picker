import styled from 'styled-components';

export const TopBarLayout = styled.div`
  height: 2rem;

  border-bottom: 1px solid rgb(47, 47, 47);
`;

export const TopBarBox = styled.div`
  height: 100%;

  margin: 0 10rem;
`;

export const TopBarMenu = styled.ul`
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TopBarMenuItem = styled.li`
  color: rgb(161, 157, 157);

  cursor: pointer;

  &:hover {
    color: white;
  }
`;
