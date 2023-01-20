import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  width: 25rem;
  height: 3rem;

  display: flex;
  flex-direction: column;

  border: 1px solid rgb(155, 155, 155);
  border-radius: 0.5rem;

  padding: 0 1rem; ;
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;

  font-size: 1rem;

  outline: none;
`;

export const SearchList = styled.ul`
  width: 25rem;

  display: flex;
  flex-direction: column;

  border: 1px solid rgb(155, 155, 155);
  border-radius: 0.5rem;
  padding: 1rem;

  gap: 0.5rem;
`;

export const SearchItem = styled.li`
  flex: 1;

  cursor: pointer;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
