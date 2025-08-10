/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames';

import Head from 'next/head';


import { cn } from 'src/lib/utils';

import { PrivacyWrapper } from './index.styled';

const Privacy = ({ className }: { className?: string }) => {
  const textDefaultClass = classNames(`font-['Gilroy'] text-[#333333]`);
  const text1Class = classNames(`${textDefaultClass} font-[700] text-3xl md:text-6xl`);
  const text2Class = classNames(`${textDefaultClass} font-[700] text-lg pb-5 md:text-xl`);
  const text3Class = classNames(`${textDefaultClass} font-[400] text-sm pb-5 md:text-base`);

  return (
    <>
      <Head>
        <title>Privacy | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Learn about our privacy policies and commitment to safeguarding your information. Your privacy matters to us."
          content="Privacy | RenewMe"
        />
      </Head>

      <PrivacyWrapper
        className={cn(
          'container mx-auto flex flex-col py-24 px-10 text-3xl sm:px-20 md:py-28 lg:max-w-[825px] lg:px-0 lg:py-32 xl:py-40',
          className
        )}
      >
        <h1 className={text1Class}>Privacy Policy</h1>
        <p className={`${textDefaultClass} pb-5 text-base md:text-lg `}>(Updated: January 2025)</p>
        <p className={text3Class}>
          RenewMe is committed to your privacy. This Privacy Policy explains how we collect, use,
          disclose, retain and protect your personal information in connection with our services.
        </p>
        {/* Introduction */}
        <section className="pb-7">
          <p className={text2Class}>Introduction</p>
          <p className={text3Class}>
            This Privacy Policy, together, with our Terms of Use, applies to our applications
            (including the RenewMe and Soulscape Apps), various websites (including
            www.myrenewme.com), widgets, email notifications, push notifications, and other mediums,
            or portions of such mediums, including our online and offline services and products
            (collectively, our “Services”),through which you have accessed this Privacy Policy. This
            Privacy Policy and our Terms of Use describe the types of personally identifiable
            information and non-personally identifiable information that you provide to us or that
            we collect from you in connection with the provision of our Services (“Your
            Information”).
          </p>
          <p className={text3Class}>
            Please read this Privacy Policy and our Terms of Use carefully. By accessing or using
            our Services, you consent to the collection, transfer, manipulation, storage,
            disclosure, processing and other uses of Your Information as described in this Privacy
            Policy. If you do not want Your Information used or disclosed in the manner described in
            this Privacy Policy, then you should not use our Services or provide us with Your
            Information. To the extent that this Privacy Policy conflicts with our Terms of Use,
            this Privacy Policy will apply and control.
          </p>
          <p className={text3Class}>
            This Privacy Policy does not apply to the following information:
          </p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li>
              Information collected by anyone other than us (even if related to our business).
            </li>
            <li>Information collected by us where a separate privacy policy applies.</li>
            <li>
              Non-personally identifiable information, which, standing alone, cannot be used to
              determine your identity. However, if we link such non-personally identifiable
              information with Your Information in a manner that can be used to determine your
              identity, then this Privacy Policy will apply.
            </li>
            <li>
              Unsolicited information that you provide to us through the Services or through any
              other means, including information posted to any public areas of our Services, such as
              bulletin boards, any ideas for new products or modifications to existing products or
              services, and other unsolicited submissions (collectively, “Unsolicited Information”).
              All Unsolicited Information is deemed to be non-confidential and we are free, and you
              hereby grant us the right, to reproduce, use, disclose and distribute such Unsolicited
              Information to others without limitation or attribution.
            </li>
          </ul>
        </section>

        {/* Information We Collect and How We Collect It */}
        <section className="pb-7">
          <p className={text2Class}>Information We Collect and How We Collect It</p>
          <p className={text3Class}>
            <strong>1- Information You Provide to Us Directly</strong>
          </p>
          <p className={text3Class}>
            When you register with or otherwise use our Services, we may require Your Information,
            such as your name, email, phone number, mailing address, and other information that may
            help us improve our Services. We may require additional information to provide you with
            Our Services, including in connection with Transactions, Promotions, purchasing
            Products, or otherwise for any reason associated with our business. If you choose not to
            provide us with any requested information, you may not be able to use some or all of the
            features of our Services.
          </p>
          <p className={text3Class}>
            We may also let you create a profile, separate from your social network profile (for
            example, your Facebook profile), that RenewMe users and other third parties can see. We
            collect Your Information and content (such as photos, reviews, ratings, and other
            information) that you choose to submit in connection with our Services, including in the
            process of creating or editing your account and user profile.
          </p>
          <p className={text3Class}>
            <strong>2- Information that You Generate Using Our Communications Features</strong>
          </p>
          <p className={text3Class}>
            Our Services may allow you to communicate or share information with us, as well as other
            RenewMe users through publicly accessible pages, blogs, private messages, community
            forums, and other mediums. You expressly acknowledge and agree that we may access in
            real-time, record, and store archives of these communications (including any call or
            message data, such as the date, time, and content of such call or message and the
            applicable phone numbers) on RenewMe’s servers to make use of them in connection with
            our Services.
          </p>
          <p className={text3Class}>
            We may also let you create a profile, separate from your social network profile (for
            example, your Facebook profile), that RenewMe users and other third parties can see. We
            collect Your Information and content (such as photos, reviews, ratings, and other
            information) that you choose to submit in connection with our Services, including in the
            process of creating or editing your account and user profile.
          </p>
          <p className={text3Class}>
            <strong>3- Third Parties Provide Your Information to Us.</strong>
          </p>
          <p className={text3Class}>
            We may collect Your Information from sources other than you, such as from social
            networks (for example, Facebook, Instagram , Snapchat, and others), blogs, other users,
            and our business partners. If you use or access our Services on or through a social
            network, then we will receive certain information about you and your friends from the
            social network automatically. The information that we will receive depends on the social
            network and your privacy settings. For instance, we may collect some or all of the
            following of Your Information from the social network: your name, profile picture,
            social network identification number, login email, physical location, gender, birthday,
            age, other publicly available information, and any other information that you or the
            social network shares with us. If you access our Services from a social network, please
            read that social network’s terms of use and privacy policy carefully.
          </p>
          <p className={text3Class}>
            <strong>4- Information We Collect Automatically</strong>
          </p>
          <p className={text3Class}>
            When you use our Services, we and service providers acting on our behalf may use
            technology to collect information about you, including your location, IP address,
            browser type, ISP, cookie identifiers, mobile carrier, MAC address, IMEI, Game Center
            ID, referral and exit pages, clickstream data, pages visited, time of visits and
            information related to your device, such as hardware models and IDs, device type,
            operating system version, the request type, the content of your request and basic usage
            information about your use of our Services, such as date and time. We may also collect
            and store information locally on your device using mechanisms, such as browser web
            storage and application data caches.
          </p>
          <p className={text3Class}>
            We and service providers acting on our be half may collect such information through a
            variety of technical methods, including sending cookies, web beacons, pixel tags and
            other anonymous identifiers to your device. “Cookies” are pieces of data stored on our
            computer, mobile phone or other device. A “web beacon” is a type of technology that lets
            us know if you visited a certain page or whether you opened an email. A “pixel tag” is a
            type of technology placed within a website or email for the purpose of tracking
            activity, which is often used in combination with cookies. Other “identifiers” are
            random strings of characters used for the same purposes as cookies, such as with mobile
            devices where cookie technology is not available. These technologies help us provide you
            with features based on your preferences, understand when you are interacting with our
            Services, and compile other information regarding your use of our Services.
          </p>
          <p className={text3Class}>
            Please note that, in most cases, you can stop making your location available to us or
            remove or block cookies (such as by using the settings in your browser), but doing so
            may affect your ability to use our Services.
          </p>
          <p className={text3Class}>
            Further, our Services do not have the capability to respond to “Do Not Track” signals
            received from our web browsers. Do Not Track (“DNT”) is a privacy preference that users
            can set in certain web browsers. DNT is a way for users to inform services and websites
            that they do not want certain information about their webpage visits collected and
            across online services or websites.
          </p>
          <p className={text3Class}>
            <strong>5- Network Advertising</strong>
          </p>
          <p className={text3Class}>
            From time to time, we may participate in or use advertising networks, such as
            third-party advertising servers, advertising agencies, technology vendors, and research
            firms. We may use these third-party advertising networks for marketing, advertising, and
            promotional purposes, as well as to serve advertisements to you. Advertising networks
            often gather data about consumers who view advertisements to make inferences about a
            consumer’s interests and preferences, which enables such networks to deliver
            advertisements directly targeted to the consumer’s specific interests. This practice is
            often referred to as “online behavioral advertising.” For example, a third-party
            advertising network might collect the type of Internet browser you use, the type of
            computer operating system you use, the domain name of a website you visit, whether or
            not you visit specific pages of a website, the location of your Internet service
            provider’s presence, the date and time of a visit to a website and other interactions
            between you and a website. Please see the Online Behavioral Advertising subsection of
            the Choices About How We Use and Collect Your Information section below to read about
            how you can prevent certain third-party advertising networks from collecting information
            about you.
          </p>
          <p className={text3Class}>
            <strong>6- Third-Party Content</strong>
          </p>
          <p className={text3Class}>
            Some content or applications, including advertisements, on our Services may be served by
            third parties, including advertisers, ad networks and servers, content providers and
            application providers. These third parties may collect information about you when you
            use our Services. We do not control these third parties’ tracking technologies or how
            they may be used. If you have any questions about any targeted content, you should
            contact the responsible provider directly.
          </p>
        </section>

        {/* How and Why We Use Your Information */}
        <section className="pb-7">
          <p className={text2Class}>How and Why We Use Your Information</p>
          <p className={text3Class}>
            We may use Your Information for various lawful business purposes. Among others, below
            are some specific examples of these purposes:
          </p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li className="pb-5">
              <strong>Provide our Services to you.</strong> We strive to ensure our services meet
              the high standards that you would expect of RenewMe. For example, we might verify the
              information that you provide to us and provide you with administrative notices.
            </li>
            <li className="pb-5">
              <strong>Contact you and provide you with information.</strong> For example, we might
              contact you through telephone, email, postal, notifications, text messages, or other
              communications, where permitted by applicable law, to provide you with Service
              updates, promotional materials, surveys, offers, quotes, personalized information, and
              other information from us or our business partners.
            </li>
            <li className="pb-5">
              <strong>Analyze, improve and manage our Services and operations.</strong> For example,
              we might obtain feedback regarding our Services to understand and anticipate your
              needs and preferences, better understand your use of our Services, customize and
              tailor Service content, improve our marketing and promotional efforts, engage in
              statistical analysis, and provide feedback or information to our business partners,
              vendors, advertisers, and other third parties.
            </li>
            <li className="pb-5">
              <strong>
                Resolve problems and disputes, and engage in other legal and security matters.
              </strong>{' '}
              For example, we may use Your Information to comply with, monitor compliance with, and
              enforce this Privacy Policy, our Terms of Use, and any other applicable agreements and
              policies, as well as meet other legal and regulatory requirements and protect the
              security and integrity of our Services.
            </li>
            <li className="pb-5">
              <strong>Sharing content with friends or colleagues.</strong> For example, RenewMe may
              allow you to provide information about your friends through our “Tell a Friend”
              referral services. This service may allow you to forward or share certain content with
              a friend or colleague, such as an email inviting your friend to use our Services.
              Email addresses that you may provide for a friend or colleague may be used to send
              your friend or colleague the link or content you request, but will not be collected or
              otherwise used by us or any other third parties for any other purpose.
            </li>
            <li className="pb-5">
              <strong>Other purposes.</strong> We may also use Your Information in other ways. To
              the extent required by applicable law, we will provide notice at the time of
              collection and obtain your consent. For instance, if you apply for a job, we may
              collect Your Information in order to process your job application.
            </li>
          </ul>
        </section>

        {/* How We Disclose Your Information */}
        <section className="pb-7">
          <p className={text2Class}>How We Disclose Your Information</p>
          <p className={text3Class}>We may disclose Your Information:</p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li className="pb-5">
              To any person who, in our reasonable judgment, is authorized to receive Your
              Information as your agent, including as a result of your business dealings with that
              person (for example, your attorney);
            </li>
            <li className="pb-5">
              To our third-party vendors so that they may provide support for our internal and
              business operations (“Our Vendors”), including for payment or data processing, IT or
              related services, data verification, data storage, surveys, research, customer service
              activities, internal marketing, delivery of promotional and marketing materials and
              our Services’ maintenance and security;
            </li>
            <li className="pb-5">To fulfill the purpose for which you provide it;</li>
            <li className="pb-5">
              For any other purpose disclosed by us when you provide Your Information to us;
            </li>
            <li className="pb-5">With your consent;</li>
            <li className="pb-5">
              To third parties that are interested in contacting you or providing offers to you that
              may be related to our services that you may find of interest;
            </li>
            <li className="pb-5">
              To third parties whose websites or applications we may link to through our Services if
              you choose to click on the third-party links;
            </li>
            <li className="pb-5">
              As required by law or ordered by a court, regulatory or administrative agency;
            </li>
            <li className="pb-5">
              As we deem necessary, in our sole discretion, if we believe that you are violating any
              applicable law, rule, or regulation, or are otherwise interfering with another’s
              rights or property, including our rights or property;
            </li>
            <li className="pb-5">
              If requested by authorities in the event of any act or instance of local, regional,
              national, or international emergency;
            </li>
            <li className="pb-5">
              To enforce our Terms of Use, this Privacy Policy, and any other applicable agreements
              and policies;
            </li>
            <li className="pb-5">To enforce or protect our rights;</li>
            <li className="pb-5">
              In connection with a business transfer (as described in the section titled Business
              Transfers below); and
            </li>
            <li className="pb-5">
              To our affiliated companies (for example, companies under common control or management
              with us).
            </li>
          </ul>
          <p className={text3Class}>
            Please note that the list above is not exhaustive and that we may, in our sole
            discretion, to the extent permitted by applicable law, share, loan, rent, sell or
            otherwise disclose information we collect from you to third parties at any time, for any
            lawful purpose, without notice or compensation to you.
          </p>
          <p className={text3Class}>
            If we disclose Your Information to third parties, Your Information will become
            permanently subject to the information use and sharing practices of the third party. We
            have taken steps to ensure that such third parties respect Your Information, but please
            be aware that we make no guarantee whatsoever in connection with how such third parties
            use, disclose and treat Your Information and such third parties may further disclose,
            share and use Your Information. By submitting Your Information to us, you expressly
            consent to such disclosure and use of Your Information. If you do not want Your
            Information shared as described above, then you should not provide us with Your
            Information.
          </p>
        </section>

        {/* Aggregation and De-Personalization */}
        <section className="pb-7">
          <p className={text2Class}>Aggregation and De-Personalization</p>
          <p className={text3Class}>
            We may take Your Information and de-identify it either by combining it with information
            about other individuals (aggregating Your Information with information about other
            individuals) or by removing characteristics (such as your name) that make Your
            Information personally identifiable to you (de-identifying Your Information). We reserve
            the right to share, loan, rent, sell or otherwise disclose such information to third
            parties at any time, for any lawful purpose, without notice or compensation to you.
          </p>
        </section>

        {/* Sharing with Friends */}
        <section className="pb-7">
          <p className={text2Class}>Sharing with Friends</p>
          <p className={text3Class}>
            If you use any functionality of our Services that allow you to send, share or
            communicate content, information, or material to a friend, then please be aware that (i)
            we may display your email address or another mode of communication to your friend; and
            (ii) we may use any information that you provide about your friend to facilitate the
            communication and as otherwise set forth in this Privacy Policy.
          </p>
        </section>

        {/* Promotions */}
        <section className="pb-7">
          <p className={text2Class}>Promotions</p>
          <p className={text3Class}>
            Please refer to the official rules and privacy policy for each individual Promotion (if
            any), as well as this Privacy Policy and our Terms of Use, for our specific policies
            regarding information sharing and disclosure pursuant to that Promotion.
          </p>
        </section>

        {/* Circumvention of Security Measures */}
        <section className="pb-7">
          <p className={text2Class}>Circumvention of Security Measures</p>
          <p className={text3Class}>
            We use a variety of technical, administrative, and organizational security measures to
            keep Your Information safe. However, despite our efforts, please be aware that methods
            of transmission and electronic storage are not completely secure. We cannot guarantee
            the privacy or security of Your Information or any voice or data transmissions, as third
            parties may unlawfully intercept or access transmissions or electronic storage .
            Further, to the extent permitted by applicable law, we are not responsible for
            circumvention of any privacy settings or security measures of our Services. Therefore,
            you use our Services at your own risk, you should not expect, that Your Information or
            voice or data transmissions will always remain private, and we do not guarantee the
            performance or adequacy of our privacy settings or security measures. In the event that
            an unauthorized third party compromises our security measures, to the extent permitted
            by applicable law, we will not be responsible for any damages, directly or indirectly,
            caused by an unauthorized third party’s ability to view, use or disseminate Your
            Information.
          </p>
        </section>

        {/* User Contributions */}
        <section className="pb-7">
          <p className={text2Class}>User Contributions</p>
          <p className={text3Class}>
            You may provide information (including messages and other content) to be published,
            posted, submitted, transmitted or displayed (collectively, “posted”) on or through our
            Services to RenewMe users or other third parties (collectively, “User Contributions”).
            Your User Contributions are posted on our Services at your own risk. We cannot control
            the actions of other users of our Services with whom you may choose to share your User
            Contributions. Therefore, we cannot and do not guarantee that your User Contributions
            will not be viewed by unauthorized persons. Please exercise caution before posting any
            User Contributions on our Services
          </p>
        </section>

        {/* Business Transfers */}
        <section className="pb-7">
          <p className={text2Class}>Business Transfers</p>
          <p className={text3Class}>
            We specifically and expressly reserve the right to disclose, lease, sell, assign or
            transfer Your Information to a buyer or other successor in the event of a sale,
            acquisition, merger, consolidation, reorganization, bankruptcy, dissolution, or other
            corporate change involving our business, even if such event is only being contemplated
            and regardless of whether such event relates to a part of the whole of our business.
            Nothing in this Privacy Policy is intended to interfere with our ability to transfer all
            or part of our business, equity, or assets to an affiliate or independent third party at
            any time, for any lawful purpose, without notice or compensation to you.
          </p>
        </section>

        {/* How Long Do We Retain Your Information */}
        <section className="pb-7">
          <p className={text2Class}>How Long Do We Retain Your Information</p>
          <p className={text3Class}>
            We will retain Your Information for the period necessary to fulfill the purposes for
            which Your Information has been collected as outlined in this Privacy Policy unless a
            longer retention period is required by applicable law.
          </p>
        </section>

        {/* Choices About How We Use and Disclose Your Information */}
        <section className="pb-7">
          <p className={text2Class}>Choices About How We Use and Disclose Your Information</p>
          <p className={text3Class}>
            We strive to provide you with choices regarding Your Information that you provide to us.
            Below are some mechanisms that provide you with control over certain information:
          </p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li className="pb-5">
              <strong>Cookies.</strong> If you do not wish us to collect cookies, you may set your
              browser to refuse cookies or to alert you when cookies are being sent. If you do so,
              please note that some or all parts of our Services may then be inaccessible or may not
              function properly.
            </li>
            <li className="pb-5">
              <strong>Communications.</strong> If you do not wish to receive notifications, text
              messages, alerts, posts, notices, emails, or other communications from us, you can opt
              out of receiving such communications from us (other than service-related
              communications, such as those communications related to the completion of your
              registration, correction of user data, change of password and other similar
              communications essential to your transactions on or through our Services) through your
              account settings or by, to the extent applicable, by using the unsubscribe process at
              the bottom of such communication, by emailing us at{' '}
              <a className="underline" href="mailto:info@MyRenewMe.com">
                info@MyRenewMe.com
              </a>{' '}
              or by calling us at 1-800-515-6460. Please be aware that it can take up to 10 business
              days to remove you from our marketing lists. If you opt out from receiving our
              marketing communications, you may continue to receive service-related communications,
              such as communications that are essential to your transactions on or through our
              Services.
            </li>
            <li className="pb-5">
              <strong>Managing Your Information.</strong> If a portion of our Services allows you to
              create an account with us, then you can review and update some of Your Information by
              logging into that portion of our Services, visiting your account profile page, and
              making changes. To the extent required by applicable law, you may have the right to
              request (i) access to Your Information; (ii) an electronic copy of Your Information
              (portability); (iii) correction of Your Information if it is inaccurate or incomplete;
              or (iv) deletion or restriction of Your Information in certain circumstances provided
              by applicable law; provided, however, that deletion or restriction may not include all
              locations(for instance, Your Information may be retained in back-ups, be required to
              be retained for a longer period of time under applicable law, or be shared with third
              parties prior to removal). We may decline to process requests that jeopardize the
              privacy of others, are extremely impractical, or would cause us to take any action
              that is not permissible under applicable laws. We will make all required updates and
              changes within the time specified by applicable law, and where permitted under
              applicable law, may charge an appropriate fee to cover the costs of responding to such
              request. Further, where we have obtained your consent for processing Your Information,
              you have the right to withdraw your consent at any time. If you have a request
              regarding Your Information, please contact us using any of the methods described below
              under the section titled Questions, Comments, or Concerns. About this Privacy Policy?
              below. Please remember, if you make such a request, we may not be able to provide you
              with the same quality and variety of Services to which you are accustomed.
            </li>
            <li className="pb-5">
              <strong>Online Behavioral Advertising.</strong> Certain third-party advertising
              networks that deliver behavioral advertising are members of the Network Advertising
              Initiative (“NAI”). You can prevent NAI member companies from collecting preference
              data about you by visiting{' '}
              <a
                className="underline"
                href="http://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noreferrer"
              >
                http://www.networkadvertising.org/choices/
              </a>{' '}
              and following the NAI’s directions. Note that if you opt out through the NAI, you will
              still receive advertising. In addition, if you opt out through the NAI and later
              delete your cookies, use a different browser or buy a new computer, you will need to
              renew your opt-out choice.
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="pb-7">
          <p className={text2Class}>Your Information that You Disclose to Third Parties</p>
          <p className={text3Class}>
            This Privacy Policy applies only to our Services and not to websites, online services,
            or applications owned by third parties. Our Services may contain links to other
            websites, online services, or applications. We are not responsible for the privacy
            policies and other practices of such third parties or the accuracy or quality of the
            services of such third parties. Any information you disclose to third parties will be
            subject to such third parties' privacy policies and practices. You should review such
            third parties' privacy policies and practices before disclosing information to them. If
            you have any questions about how these third parties use your information, you should
            review their policies and contact them directly.
          </p>
        </section>

        {/* International Users */}
        <section className="pb-7">
          <p className={text2Class}>Operations of Our Services in the United States</p>
          <p className={text3Class}>
            Our Services are operated in the United States. Your Information may be processed by us
            in the country where it was collected as well as in other countries (including, without
            limitation, the United States) where laws regarding the processing of Your Information
            may be less stringent than the laws in your country.
          </p>
        </section>

        {/* Children’s Information */}
        <section className="pb-7">
          <p className={text2Class}>Children’s Information.</p>
          <p className={text3Class}>
            If you are below the age of 18, you may only download, install, access, or use our
            Services under the supervision of a parent or legal guardian who agrees to be bound by
            this Privacy Policy and our Terms of Use. Our Services are not directed towards children
            under 13 and we do not knowingly collect personally identifiable information from
            children under 13. If we learn that we have inadvertently gathered personal information
            from a child under 13, we will take reasonable measures to promptly remove that
            information from our records.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="pb-7">
          <p className={text2Class}>Changes to this Privacy Policy</p>
          <p className={text3Class}>
            We may update, amend or change this Privacy Policy at any time, in our sole discretion
            and without notice. Amendments will take effect immediately upon us posting such updates
            on our Services. If we materially change the way in which we process Your Information,
            we will provide you with prior notice, or where legally required, request your consent
            prior to implementing such material changes. We encourage you to periodically check this
            Privacy Policy for changes, as your continued access and use of our Services following
            the posting of any changes will automatically be deemed your acceptance of all changes.
            If you do not agree to any change to this Privacy Policy, you must discontinue using the
            Services. This Privacy Policy replaces all previous notices or statements with respect
            to this subject, and cannot be modified orally or in writing by any of our associates,
            representatives or any other third parties.
          </p>
        </section>

        {/* Your California Rights Policy */}
        <section className="pb-7">
          <p className={text2Class}>Your California Rights Policy</p>
          <p className={text3Class}>
            Individuals who are residents of California and have provided Your Information to us may
            request certain information regarding our disclosure of Your Information to third
            parties for direct marketing purposes. Such requests must be submitted to us at{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>{' '}
            or
          </p>
          <p className={text3Class}>
            <strong>RenewMe</strong>
            <br />
            Attention: Legal
            <br />
            299 Camino Gardens Blvd, Suite 100
            <br />
            Boca Raton, Florida 33432
          </p>
          <p className={text3Class}>
            California privacy rights requests must include the reference “Request for California
            Privacy Information” on the subject line and in the body of the message and must include
            the email address or mailing address, as applicable, for us to send our response. This
            request may be made no more than once per calendar year. We reserve the right not to
            respond to requests submitted other than to the address specified above.
          </p>
        </section>

        {/* Contact Us */}
        <section className="pb-7">
          <p className={text2Class}>Questions, Comments, or Concerns About this Privacy Policy?</p>
          <p className={text3Class}>
            Our team is always happy to hear from you. We welcome any questions, comments and
            concerns about this Privacy Policy. If you have questions, comments or concerns
            regarding this Privacy Policy, or wish to exercise your rights related to Your
            Information, please contact us at{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>
            :
          </p>
          <p className={text3Class}>
            <strong>RenewMe</strong>
            <br />
            Attention: Legal
            <br />
            299 Camino Gardens Blvd, Suite 100
            <br />
            Boca Raton, Florida 33432
          </p>
          <p className={text3Class}>
            If we do not address your questions, comments or concerns about this Privacy Policy to
            your satisfaction, you may have a right to lodge a complaint with the applicable
            supervisory authority.
          </p>
        </section>
      </PrivacyWrapper>
    </>
  );
};

export default Privacy;
