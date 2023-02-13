import { useNavigate } from 'react-router';
import { Layout, Title } from './HeaderStyled';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Title onClick={() => navigate('/moviepicker')}>MOVIEPICKER</Title>
    </Layout>
  );
};
