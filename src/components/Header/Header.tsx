import { useNavigate } from 'react-router';
import { HeaderLayout, PageTitle } from './HeaderStyled';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <PageTitle onClick={() => navigate('/moviepicker')}>
        MOVIEPICKER
      </PageTitle>
    </HeaderLayout>
  );
};
