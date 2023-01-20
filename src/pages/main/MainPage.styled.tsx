import styled from 'styled-components';

export const Layout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Section = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;
`;

export const MainTitle = styled.h1`
  user-select: none;
`;
