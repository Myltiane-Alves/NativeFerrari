import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { PageHeaderSubTitle } from './PageHeaderSubTitle';
import { PageHeaderTitle } from './PageHeaderTitle';
import { PageProps } from './PageProps';
import { PageWrap } from './PageWrap';

export const Page = ({
  title,
  subtitle,
  children,
  color = 'black',
}: PageProps) => {
  return (
    <PageWrap>
      <PageContent>
        <PageHeader color={color}>
          {typeof title === 'string' ? (
            <PageHeaderTitle>{title}</PageHeaderTitle>
          ) : (
            title
          )}
          {subtitle && <PageHeaderSubTitle>{subtitle}</PageHeaderSubTitle>}
        </PageHeader>
        {children}
      </PageContent>
    </PageWrap>
  );
};
