import MediaInquiries from 'modules/Contact/components/media-inquiries';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const ContactMediaInquiriesPage: NextPage = () => {
  return (
    <PageLayout>
      <MediaInquiries />
    </PageLayout>
  );
};

export default ContactMediaInquiriesPage;
