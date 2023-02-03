import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;

  margin-top: 6rem;
  padding: 0 5rem;
`;

export const NavBox = styled.div`
  width: 18rem;

  display: flex;

  gap: 1rem;
`;

export const NavPopular = styled.div<{ nowcursor: string }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(prop) =>
    prop.nowcursor === 'movie/popular'
      ? 'border-bottom: 1px solid rgb(245, 245, 245);'
      : ''}

  transition: .8s all;
  cursor: pointer;
`;

export const NavRecent = styled.div<{ nowcursor: string }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(prop) =>
    prop.nowcursor === 'movie/upcoming'
      ? 'border-bottom: 1px solid rgb(245, 245, 245);'
      : ''}

  transition: .8s all;
  cursor: pointer;
`;

export const NavItemLabel = styled.label`
  color: white;

  font-size: 1.3rem;

  cursor: pointer;
`;
