import { PageLayout } from '../components/layouts';
import { ProductAdminSection } from '../components/sections';
import { CouponAdminSection } from '../components/sections';

export const AdminPage = () => {
  return (
    <PageLayout title="관리자 페이지">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductAdminSection />
        <CouponAdminSection />
      </div>
    </PageLayout>
  );
};
