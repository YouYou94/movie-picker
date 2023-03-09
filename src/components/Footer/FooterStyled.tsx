import styled from 'styled-components';

export const Layout = styled.footer`
  width: 100%;
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;

  background-color: rgb(17, 17, 17);

  gap: 1rem;
`;

export const FooterTitleBox = styled.div`
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.h1`
  font-family: 'Dosis';
  font-weight: 700;

  color: rgb(242, 242, 242);
`;

export const FooterMenuBox = styled.div`
  width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;

  font-family: 'Dosis';
  font-size: 1.2rem;
  font-weight: 700;

  background-color: transparent;
  color: rgb(242, 242, 242);

  :hover {
    text-decoration: underline;
  }
`;
