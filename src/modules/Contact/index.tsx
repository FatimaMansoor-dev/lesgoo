import React from 'react';

import Head from 'next/head';

import ContactLayout from './components/layout';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Connect with RenewMe for collaborations, inquiries, and partnership opportunities.  "
          content="Contact Us | RenewMe"
        />
      </Head>
      <ContactLayout
        email="info@myrenewme.com"
        title="Contact Us"
        description={
          <>
            Do you have any concern or questions? <br />
            Please click on help & support or contact us
          </>
        }
        sendDescription={
          <>
            Do you have any concern or questions? <br />
            Please click on help & support or contact us
          </>
        }
      />
    </>
  );
};

export default Contact;
