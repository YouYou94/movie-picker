import styled from 'styled-components';

export const DetailContainer = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const BackdropImg = styled.img`
  position: absolute;

  width: 100vw;
  height: 100vh;

  filter: opacity(30%);

  z-index: 0;
`;

export const DetailArticle = styled.div`
  flex: 1;

  display: flex;

  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PosterImg = styled.img`
  width: 70%;

  border-radius: 0.7rem;
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const DescriptionBox = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;

  border-radius: 0.7rem;
  padding: 2rem;

  color: white;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const Description = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const MovieTitle = styled.h1``;

export const MovieEngTitle = styled.h2``;

export const DescriptionLabel = styled.label``;
