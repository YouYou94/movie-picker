import styled from 'styled-components';

export const MoviesLayout = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 3rem 3rem;

  gap: 3rem;
`;

export const MovieCaption = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: none;

  padding: 2rem;

  color: white;

  font-size: 1rem;

  background-color: rgb(45, 45, 45, 0.8);
`;

export const MovieBox = styled.div`
  position: relative;

  width: 16rem;
  height: 24rem;

  display: flex;
  flex-direction: column;

  border-radius: 1rem;

  transition: 0.2s all;

  cursor: pointer;

  :hover {
    transform: translateY(-2%);
  }

  :hover {
    ${MovieCaption} {
      display: flex;
      flex-direction: column;

      gap: 0.8rem;
    }
  }
`;

export const MoviePoster = styled.div<{ poster?: string }>`
  flex: 1;

  background-image: url(${(prop) => prop.poster});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0.7rem;
`;

export const MovieTitle = styled.h2``;

export const MovieReleaseDate = styled.label`
  cursor: pointer;
`;

export const MovieOverview = styled.label`
  text-overflow: ellipsis;

  cursor: pointer;
`;
