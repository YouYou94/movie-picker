import { MainSearchContainer } from '../../components';
import { Header, Layout, MainTitle, Section } from './MainPage.styled';

const MainPage = () => {
  return (
    <Layout>
      <Header>
        <MainTitle>MOVIE SEARCH SERVICE</MainTitle>
      </Header>
      <Section>
        <MainSearchContainer />
      </Section>
    </Layout>
  );
};

export default MainPage;
