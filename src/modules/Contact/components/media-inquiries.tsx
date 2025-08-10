import React from 'react';

import ContactLayout from './layout';

const MediaInquiries: React.FC = () => {
  return (
    <ContactLayout
      email="info@myrenewme.com"
      title="Media Inquiries"
      description={
        <>
          Get in touch with RenewMe team and <br />
          we will get back to you!
        </>
      }
      sendDescription={
        <>
          Do you have a media inquiry? <br />
          Please free free to contact us.
        </>
      }
    />
  );
};

export default MediaInquiries;
