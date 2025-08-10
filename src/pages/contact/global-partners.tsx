import GlobalPartners from 'modules/Contact/components/global-partners';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const ContactGlobalPartnersPage: NextPage = () => {
  return (
    <PageLayout>
      <GlobalPartners />
    </PageLayout>
  );
};

export default ContactGlobalPartnersPage;
