import { LoadingBox, LoadingMessage, LoadingSpinner } from './LoadingStyled';

export const Loading = () => {
  return (
    <LoadingBox>
      <LoadingMessage>잠시만 기다려주세요.</LoadingMessage>
      <LoadingSpinner></LoadingSpinner>
    </LoadingBox>
  );
};
