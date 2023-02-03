import { useNavigate } from 'react-router';
import {
  OperationBox,
  ButtonBox,
  BackImage,
  HambergerImage,
} from './UserOperationStyled';

export const UserOperation = ({ setIsDisplay }: any) => {
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  const onClickDisplayPicker = () => setIsDisplay(true);

  return (
    <OperationBox>
      <ButtonBox onClick={onClickBack}>
        <BackImage />
      </ButtonBox>
      <ButtonBox onClick={onClickDisplayPicker}>
        <HambergerImage />
      </ButtonBox>
    </OperationBox>
  );
};
