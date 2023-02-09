import styled from 'styled-components';

export const Layout = styled.div<{ isMargin?: boolean }>`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: ${(prop) => (prop.isMargin ? '6rem' : '0')};

  background-color: rgb(250, 250, 250);
`;
