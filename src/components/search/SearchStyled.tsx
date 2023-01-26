import styled from 'styled-components';

export const Layout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  background-color: rgb(55, 55, 55);
`;

export const TitleBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 1rem;
`;

export const Title = styled.h1`
  color: rgb(245, 245, 245);

  font-size: 3rem;
`;

export const SearchBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  gap: 0.5rem;
`;

export const SearchInput = styled.input<any>`
  width: 23rem;
  height: 3rem;

  border-radius: 5rem;
  padding: 0 1rem;

  font-size: 1rem;

  outline: none;
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;

  border: none;
  border-radius: 50%;

  cursor: pointer;
`;
