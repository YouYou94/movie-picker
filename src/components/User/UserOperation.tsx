import { useNavigate } from 'react-router';
import {
  OperationBox,
  ButtonBox,
  BackImage,
  HambergerImage,
} from './UserOperationStyled';

export const UserOperation = () => {
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  return (
    <OperationBox>
      <ButtonBox onClick={onClickBack}>
        <BackImage />
      </ButtonBox>
      <ButtonBox>
        <HambergerImage />
      </ButtonBox>
    </OperationBox>
  );
};
