import { TemplateInterface } from '../type';
import { Layout } from './PageTemplateStyled';

export const PageTemplate = ({ header, children }: TemplateInterface) => {
  return (
    <Layout>
      {header}
      {children}
    </Layout>
  );
};
