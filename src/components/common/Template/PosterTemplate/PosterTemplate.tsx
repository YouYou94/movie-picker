import { TemplateInterface } from '../type';
import { Layout, BackgroundPoster } from './PosterTemplateStyled';

export const PosterTemplate = ({
  header,
  children,
  background_path,
}: TemplateInterface) => {
  return (
    <Layout>
      <BackgroundPoster
        src={
          background_path
            ? `https://image.tmdb.org/t/p/original/${background_path}`
            : ''
        }
        alt={background_path}
      />
      {header}
      {children}
    </Layout>
  );
};
