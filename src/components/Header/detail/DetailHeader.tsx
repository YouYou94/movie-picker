import { useNavigate } from 'react-router';
import {
  HeaderLayout,
  HeaderButton,
  BackImage,
  HambergerImage,
} from './DetailHeaderStyled';

export const DetailHeader = ({ setIsDisplay }: any) => {
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  const onClickDisplayPicker = () => setIsDisplay(true);

  return (
    <HeaderLayout>
      <HeaderButton onClick={onClickBack}>
        <BackImage />
      </HeaderButton>
      <HeaderButton onClick={onClickDisplayPicker}>
        <HambergerImage />
      </HeaderButton>
    </HeaderLayout>
  );
};
