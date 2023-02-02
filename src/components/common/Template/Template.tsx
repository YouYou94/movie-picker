import { ReactElement } from 'react';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement;
};

export const Template = ({ children }: TemplateProps) => {
  return <Layout>{children}</Layout>;
};
