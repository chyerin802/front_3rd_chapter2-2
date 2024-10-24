import { PropsWithChildren } from 'react';

const PageLayout = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
