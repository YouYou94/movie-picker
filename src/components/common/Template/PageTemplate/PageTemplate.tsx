import { TemplateInterface } from '../type';
import { Layout } from './PageTemplateStyled';

export const PageTemplate = ({
  header,
  children,
  isMargin,
}: TemplateInterface) => {
  return (
    <Layout isMargin={isMargin}>
      {header}
      {children}
    </Layout>
  );
};
