import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(359deg);
}
`;

export const LoadingBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

export const LoadingMessage = styled.span``;

export const LoadingSpinner = styled.div`
  width: 8rem;
  height: 8rem;

  border: 5px solid rgb(245, 245, 245);
  border-top: 5px solid rgb(45, 45, 45);
  border-radius: 50%;

  animation: ${Spin} 1.5s infinite linear;
`;
