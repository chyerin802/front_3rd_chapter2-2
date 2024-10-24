import { PropsWithChildren } from 'react';

const SectionLayout = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default SectionLayout;
