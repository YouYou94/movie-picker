import styled from 'styled-components';

export const NavLayout = styled.nav`
  height: 7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 0rem 3rem;
  }

  @media screen and (max-width: 560px) {
    padding: 0rem 2rem;
  }
`;

export const NavBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const SearchResultBox = styled.div``;

export const NavHashTag = styled.div<{ isSelect?: boolean }>`
  min-width: 5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0 1rem;

  background-color: ${(prop) =>
    prop.isSelect ? 'rgb(31, 41, 55)' : 'rgb(224, 226, 233)'};

  color: ${(prop) => (prop.isSelect ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)')};

  font-weight: 700;

  cursor: pointer;

  :hover {
    color: white;
    background-color: rgb(31, 41, 55);
  }
`;
