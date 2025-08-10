import classNames from 'classnames';

import Head from 'next/head';
import Link from 'next/link';

import { ROUTES } from 'shared/constants/Routes';

import { cn } from 'src/lib/utils';

import { TermsWrapper } from './index.styled';

const Terms = ({ className }: { className?: string }) => {
  const textDefaultClass = classNames(`font-['Gilroy'] text-[#333333]`);
  const text1Class = classNames(`${textDefaultClass} font-[700] text-3xl md:text-6xl`);
  const text2Class = classNames(`${textDefaultClass} font-[700] text-lg pb-5 md:text-xl`);
  const text3Class = classNames(`${textDefaultClass} font-[400] text-sm pb-5 md:text-base`);

  return (
    <>
      <Head>
        <title>Terms | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Review our terms of use to understand the conditions for using our website. Learn about your rights and responsibilities."
          content="Terms | RenewMe"
        />
      </Head>
      <TermsWrapper
        className={cn(
          'container mx-auto flex flex-col py-24 px-10 text-3xl sm:px-20 md:py-28 lg:max-w-[825px] lg:px-0 lg:py-32 xl:py-40',
          className
        )}
      >
        <h1 className={text1Class}>Terms of Use</h1>
        <p className={`${textDefaultClass} pb-5 text-base md:text-lg `}>(Updated: January 2025)</p>

        <section className="pb-7">
          <p className={text3Class}>
            RenewMe brand products, including Soulscape, and Spascape on our iOS application and
            website available at{' '}
            <Link className="underline" href={ROUTES.HOME}>
              www.myrenewme.com
            </Link>
            , are owned and operated by Renew Media Productions, LLC (“RenewMe,” “we” or “us”).
            RenewMe provides services to help people lead a balanced, relaxed, and motivated life.
            These Terms of Use (this “Agreement”) and our Privacy Policy (the “Privacy Policy”)
            govern your access to and use of our applications (including the RenewMe App), various
            websites (including{' '}
            <Link className="underline" href={ROUTES.HOME}>
              www.myrenewme.com
            </Link>
            , widgets, email notifications, push notifications, and other mediums, or portions of
            such mediums, including our online and offline services and products (collectively, our
            “Services”).
          </p>
          <p className={text3Class}>
            Please read this Agreement and the Privacy Policy carefully before downloading,
            installing, accessing, or using our Services. You agree to be bound by this Agreement
            and the Privacy Policy by downloading, installing, accessing, or using our Services.
            Your download, installation, access, or use of our Services constitutes your acceptance
            of this Agreement and the Privacy Policy, which takes effect on the date you download,
            install, access, or use our Services. If you do not agree with this Agreement or the
            Privacy Policy, you should cease downloading, installing, accessing, or using our
            Services immediately.
          </p>
          <p className={text3Class}>
            This Agreement contains an agreement to arbitrate all claims and disclaimers of
            warranties and liability. You may pursue claims against us only individually and not as
            part of any class or representative action or proceeding. You may seek relief (including
            monetary, injunctive, and declaratory relief) only individually.
          </p>
          <p className={text3Class}>
            We may immediately terminate your access to or use of our Services if you fail to comply
            with any provision of this Agreement.
          </p>
        </section>
        <section className="pb-7">
          <p className={text3Class}>
            <strong>Consideration and Your Compliance with this Agreement</strong>
          </p>
          <p className={text3Class}>
            You acknowledge that this Agreement and the Privacy Policy are each supported by
            reasonable and valuable consideration, the receipt and adequacy of which are
            conclusively acknowledged. Such consideration includes your ability to download,
            install, access, or use our Services. You represent that this Agreement and the Privacy
            Policy can bind you. If you are acting on behalf of a company or other entity, you have
            the authority to bind such a company or entity. To determine your compliance with this
            Agreement, we may monitor your access and use of our Services by our Privacy Policy.
          </p>
        </section>
        <section className="pb-7">
          <p className={text3Class}>
            <strong>Our Services Are Not Intended for Children</strong>
          </p>
          <p className={text3Class}>
            Suppose you are below the age of 18. In that case, you may only download, install,
            access, or use our Services under the supervision of a parent or legal guardian who
            agrees to be bound by this Agreement and our Privacy Policy.
          </p>
          <p className={text3Class}>
            Our Services are not directed toward children under 13, and we do not knowingly collect
            personally identifiable information from children under 13. If we learn that we have
            inadvertently gathered personal information from a child under 13, we will take
            reasonable measures to promptly remove that information from our records.
          </p>
        </section>
        <section className="pb-7">
          <p className={text3Class}>
            <strong>We Do Not Provide Medical Advice</strong>
          </p>
          <p className={text3Class}>
            Nothing in or on our Services is intended, designed, or implied to (i) diagnose, prevent
            or treat any condition or disease; (ii) ascertain the state of your health; (iii) be a
            substitute, nor replace professional medical advice, opinion, diagnosis or treatment; or
            (iv) be, and must not be taken to be, the practice of medicine, dentistry, nursing or
            any other professional healthcare advice or opinion. We do not provide medical advice or
            medical care. Your use of our Services and the Content (as defined below) is solely at
            your own risk. Not all of our Services or Products (as defined below) are suitable for
            everyone.
          </p>
          <p className={text3Class}>
            Any health information or links on our Services are provided simply for your
            convenience. Do not disregard, avoid or delay obtaining medical advice from a qualified
            healthcare provider. Please do not use our Services for emergency medical needs. If you
            experience a medical emergency, call a healthcare professional immediately and 911.
          </p>
        </section>
        <section className="pb-7">
          <p className={text3Class}>
            <strong>Your Access and Use of Our Services</strong>
          </p>
          <p className={text3Class}>
            Your right to download, install, access, or use our Services is personal to you and is
            not transferable by you to any other person or entity. You are entitled to download,
            install, access, or use our Services only for lawful, non-commercial purposes and
            according to the terms and conditions outlined in this Agreement and the Privacy Policy.
          </p>
          <p className={text3Class}>
            Your access and use of our Services may be interrupted from time to time for several
            reasons, including the malfunction of equipment, periodic updating, maintenance or
            repair of our Services, or other actions that we may, in our sole discretion, elect to
            take. We may suspend or discontinue the availability of our Services or any portion or
            feature of our Services at any time in our sole discretion and without prior notice to
            you. We will not be liable if, for any reason, all or any part of our Services are
            unavailable at any time or for any period. We may restrict access to all or any part of
            our Services from time to time by users.
          </p>
          <p className={text3Class}>
            You will not, and you will not attempt to or otherwise authorize, encourage or support a
            third party’s attempts to do any of the following, as determined by us, in our sole
            discretion, each of which may result in your loss of the right to access and use our
            Services: (i) violate this Agreement or the Privacy Policy; (ii) restrict, inhibit or
            prevent any access, use or enjoyment of our Services; or (iii) through the use of our
            Services, defame, abuse, harass, offend or threaten anyone or any entity. You may not
            metatag or frame our Services without our prior written permission, which may be
            withheld at our sole discretion. You are solely responsible for making all necessary
            arrangements to access our Services.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Your Information and Security</p>
          <p className={text3Class}>
            <strong>The integrity of Your Information.</strong> To download, install, access, or use
            our Services, you may be required to provide certain registration details or other
            information (“Your Information”). If you provide Your Information to us, you agree to
            provide true, current, complete, and accurate information and not misrepresent your
            identity. You also agree to keep Your Information current and update Your Information if
            any of Your Information changes. This Agreement and our Privacy Policy govern our
            collection, use, and disclosure of Your Information.
          </p>
          <p className={text3Class}>
            <strong>You Must Maintain the Security of Any Password Issued to You.</strong> If our
            Services require you to create a password to use certain portions of our Services or use
            a password you have created with a third party, then it is your sole responsibility to
            maintain the security of that password. We will not be liable for any loss that you may
            suffer due to the authorized or unauthorized use of your password by a third party. You
            will not allow any minor to use our Services via your registration or password. We have
            the right to disable any user name, password, or another identifier, whether chosen by
            you or provided by us, at any time in our sole discretion for any reason, including if
            you have, in our sole opinion, violated any provision of this Agreement. If you forget
            your username to any of our Services, you may be required to unsubscribe to our
            Services, create a new username, and purchase a new subscription to access our Services.
          </p>
          <p className={text3Class}>
            <strong>You Must Notify Us of a Breach.</strong> You will immediately notify us of any
            unauthorized use of your password, any unauthorized use of any account that you may have
            with us, any violation of this Agreement, or any other breach of security known to you
            in connection with any product or service available on or through our Services by
            contacting us at{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>
            .
          </p>
          <p className={text3Class}>
            <strong>You Must Comply with this Agreement and All Applicable Laws.</strong> You will
            comply with the terms of this Agreement and all applicable local, state, national and
            international laws, regulations, or rules. You will not submit to our Services any User
            Generated Content (as defined below) or other material contrary to this Agreement
            (including the Community Standards described below) or applicable local, state, national
            or international laws, regulations, or rules.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>User Generated Content</p>
          <p className={text3Class}>
            Our Services may contain message boards, ratings, scales, surveys, forums, bulletin
            boards, accounts, and other features that allow you and other users to publish, post,
            submit, transmit or display (collectively, <strong>“post”</strong>) information
            (including messages, ratings, scales, surveys, and other content) on or through our
            Services to other users of our Services or third parties (
            <strong>“User-Generated Content”</strong>). We do not approve or endorse any User
            Generated Content. We have no control over the quality, correctness, timeliness, safety,
            truth, accuracy, or legality of any User Generated Content provided by you or any other
            person or entity. You are solely responsible for the quality, correctness, timeliness,
            safety, truth, accuracy, or legality of your User Generated Content. You may find
            user-generated content posted by other users offensive, harmful, indecent, inaccurate,
            or deceptive. As a result of this, you waive any legal or equitable rights or remedies
            you have or may have against us for User Generated Content. Please use caution and
            common sense, and do not rely solely on User Generated Content published through our
            Services. Without limiting the generality of the preceding, and although we do not
            regularly review User Generated Content, we reserve the right, but not the obligation,
            to remove or edit any User Generated Content.
          </p>
          <p className={text3Class}>
            Please immediately report problems with the User Generated Content to us at{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>
            .
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Community Standards</p>
          <p className={text3Class}>
            These community standards apply to our Services and User Generated Content access or
            use. All-access or use of our Services and User Generated Content must, in its entirety,
            comply with all applicable federal, state, local, and international laws, ordinances,
            and regulations. Without limiting the preceding, your access and use of our Services and
            User-Generated Content must not:
          </p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li className="pb-5">
              Contain or promote any material that is trade libelous, unlawfully threatening,
              unlawfully harassing, defamatory, obscene, explicit or vulgar, or otherwise injurious
              to us or third parties or that infringes on our or any third party’s rights of
              publicity or privacy;
            </li>
            <li className="pb-5">
              Promote, contain or cause sexually explicit or pornographic material, violence, or
              discrimination based on race, sex, religion, nationality, disability, sexual
              orientation, age, color, pregnancy, national origin, handicap, marital status, veteran
              status, gender identity, or expression, genetic information or any other
              characteristic protected by federal, state or local law;
            </li>
            <li className="pb-5">
              Infringe any patent, trademark, trade secret, copyright or other intellectual property
              or other rights of any other person (including our rights);
            </li>
            <li className="pb-5">
              Violate the legal rights (including the rights of publicity and privacy) of others or
              contain any material that could give rise to any civil or criminal liability under
              applicable laws or regulations or that otherwise may be in conflict with this
              Agreement or the Privacy Policy;
            </li>
            <li className="pb-5">
              Respect the privacy and views of other users who use our Services and their respective
              User Generated Content;
            </li>
            <li className="pb-5">
              Contain or promote any material that is false, inaccurate, or misleading;
            </li>
            <li className="pb-5">
              Represent or promote a personal opinion as that of RenewMe, or, to the extent you have
              an affiliation with us, represent or promote a personal opinion without disclosing
              your affiliation and including a disclaimer that your views do not represent our views
              (for instance, “the views in this posting reflect my personal views and do not
              represent the views of RenewMe”);
            </li>
            <li className="pb-5">
              Circumvent user authentication or security of any host, network, or account;
            </li>
            <li className="pb-5">
              Promote any illegal activity, or advocate, promote or assist any unlawful act;
            </li>
            <li className="pb-5">
              Involve, contain or cause commercial advertisements or solicitations, including
              contests, sweepstakes, other sales promotions, barter, or advertising, without our
              prior written consent, which consent may be withheld at our sole discretion;
            </li>
            <li className="pb-5">
              Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass,
              alarm, or annoy any other person;
            </li>
            <li className="pb-5">Stalk, harass or harm another person;</li>
            <li className="pb-5">
              Interfere with or disrupt our Services, or disobey any requirements, procedures,
              policies, or regulations provided to you from time to time in connection with our
              Services (including this Agreement or the Privacy Policy);
            </li>
            <li className="pb-5">
              Impersonate any person, or misrepresent your identity or affiliation with any person
              or organization;
            </li>
            <li className="pb-5">
              Involve or contain federally trademarked or copyrighted information without our prior
              written permission;
            </li>
            <li className="pb-5">
              Contain, constitute or transmit chain letters, mass mailings, political campaigning,
              or any form of “spam”; or
            </li>
            <li className="pb-5">
              Contain, transmit or cause any viruses, worms, Trojan horses, trap doors, back doors,
              easter eggs, time bombs, cancelbots, or other code or computer programming routines
              that encompass contaminating or destructive properties or that are intended to damage,
              detrimentally interfere with, surreptitiously intercept or expropriate any system,
              data or personal information.
            </li>
          </ul>
          <p className={text3Class}>
            Suppose you are unsure about the appropriateness of any access or use of our Services or
            User Generated Content related to our Services. You must refrain from such access or use
            or from posting or communicating any such User Generated Content until you receive
            express prior written approval from us.
          </p>
          <p className={text3Class}>
            If you see content or conduct connected with our Services that reflects poorly on us,
            our employees, or other representatives, please notify{' '}
            <a className="underline" href="mailto:info@MyRenewMe.com">
              info@MyRenewMe.com
            </a>{' '}
            immediately.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Transmissions, Submissions and Postings to Our Services</p>
          <p className={text3Class}>
            If you transmit, submit or post information to our Services (including User Generated
            Content) that is not federally trademarked or copyrighted, you automatically grant us
            and our assigns the worldwide, fully-paid, royalty-free, exclusive right and license to
            use, copy, format, adapt, publish, distribute, create derivative works from, or
            incorporate any or all such information in any media whatsoever, including the Content.
            Provided that you have obtained prior written permission from us to transmit, submit or
            post information to our Services that is federally trademarked or copyrighted, you
            automatically grant us and our assigns the worldwide, fully-paid, royalty-free right to
            use, copy, format, adapt, publish, distribute, create derivative works from or
            incorporate any or all such information in any media whatsoever, including the Content.
            You also hereby grant each user of our Services a non-exclusive license to access your
            User Generated Content through the Services,,, and to use, reproduce, distribute and
            display such User Generated Content as permitted through the functionality of the
            Services and under this Agreement. The above licenses granted by you are perpetual and
            irrevocable.
          </p>
          <p className={text3Class}>
            You are solely responsible for all your transmissions, submissions or postings (for
            example, your own User Generated Content) and the consequences of transmitting,
            submitting or posting them. We assume no liability for any action or inaction regarding
            transmissions, submissions or postings by you or any other user or third party.
          </p>
          <p className={text3Class}>
            Although we do not regularly review your transmissions, submissions or postings, we may,
            at our sole discretion and at any time, edit, refuse to post or remove your
            transmissions, submissions or postings. Pursuant to our Privacy Policy, we may review
            transmissions, submissions or postings made by you to determine, in our sole discretion,
            your compliance with this Agreement.
          </p>
          <p className={text3Class}>Without limiting the foregoing, we have the right to:</p>
          <ul className={`${text3Class} list-disc pl-7`}>
            <li className="pb-5">
              Take any action with respect to any User Generated Content that we deem necessary or
              appropriate, in our sole discretion, including removal of any User Generated Content
              if we believe, in our sole opinion, that such User Generated Content violates this
              Agreement, infringes any intellectual property right or other right of any person or
              entity, threatens the personal safety of users of our Services or the public or could
              create liability for us.
            </li>
            <li className="pb-5">
              Take appropriate legal action, including referral to law enforcement for any illegal
              or unauthorized use of our Services.
            </li>
            <li className="pb-5">
              Terminate or suspend your access to all or part of our Services for any or no reason,
              including any violation of this Agreement
            </li>
          </ul>
          <p className={text3Class}>
            Without limiting the foregoing, we have the right to fully cooperate with any law
            enforcement authorities or court order requesting or directing us to disclose the
            identity or other information of anyone posting any materials on or through our
            Services. YOU WAIVE AND HOLD US (AND OUR AFFILIATES, LICENSEES AND SERVICE PROVIDERS)
            HARMLESS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES
            DURING OR AS A RESULT OF THEIR INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A
            CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Our Intellectual Property Rights</p>
          <p className={text3Class}>
            Our Services and their entire contents, features and functionality (including all
            information, text (including “RenewMe”), software, displays, images, video, audio names,
            graphics, logos, page headers, button icons, scripts and service names, and the design,
            selection and arrangement of the foregoing) are owned by us, our licensors or other
            providers of such material and are protected by United States or international
            copyright, trademark, patent, trade secret and other intellectual property or
            proprietary rights laws (collectively, the “Proprietary Marks”). You may not use the
            Proprietary Marks without our prior express written permission, which permission may be
            withheld in our sole discretion. We make no proprietary claim to any third-party names,
            trademarks or service marks appearing on or within our Services. Any third-party names,
            trademarks and service marks are property of their respective owners.
          </p>
          <p className={text3Class}>
            The information, ratings, scales, surveys, advice, data, software and content viewable
            on, contained in or downloadable from our Services (collectively, the “Content”),
            including all text, graphics, charts, pictures, photographs, videos, images, line art,
            icons and renditions, are copyrighted or trademarked by, or otherwise licensed to, us or
            our Content suppliers. We also own a copyright of a collective work in the selection,
            coordination, arrangement, presentation, display and enhancement of the Content (the
            “Collective Work”). All software used on or within our Services is our property or the
            property of our software vendors and is protected by United States and international
            copyright laws. Viewing, reading, printing, downloading or otherwise using the Content
            or the Collective Work does not entitle you to any ownership or intellectual property
            rights to the Content (including the software) or the Collective Work.
          </p>
          <p className={text3Class}>
            You are solely responsible for any damages resulting from your infringement of our or
            any third party’s intellectual property rights regarding the Proprietary Marks, the
            Content (including the software), the Collective Work or any other harm incurred by us
            as a direct or indirect result of your copying, distributing, redistributing,
            transmitting, publishing or using the Proprietary Marks, the Content (including the
            software) or the Collective Work for purposes that are contrary to the terms and
            conditions of this Agreement.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Your Use of the Content</p>
          <p className={text3Class}>
            Subject to your compliance with this Agreement, and subject to and without limiting any
            additional and applicable terms and conditions regarding the use of certain Content, we
            grant you a limited license to access, print, download or otherwise make personal use of
            the Content and the Collective Work in the form of: (i) one machine-readable copy; (ii)
            one backup copy; and (iii) one print copy, in each case solely for your non-commercial
            use; provided, however, that you will not delete any proprietary notices or materials
            with regard to the foregoing manifestations of the Content and the Collective Work. You
            may not (a) modify the Content or the Collective Work; (b) utilize the Content or the
            Collective Work for any commercial purpose or any other public display, performance,
            sale or rental; (c) decompile, reverse engineer or disassemble the Content and the
            Collective Work; or (d) transfer the Content or the Collective Work to another person or
            entity.
          </p>
          <p className={text3Class}>
            Except as otherwise permitted under the copyright laws of the United States, no other
            copying, distribution, redistribution, transmission, publication or use, other than the
            non-commercial use of the Content and the Collective Work as expressly permitted by this
            Agreement, is permitted by you without our prior written permission, which may be
            withheld in our sole discretion. You may not use any meta tags or any other “hidden
            text” utilizing our name or trademarks, or provide links to or frame our Services,
            without our prior written permission, which may be withheld in our sole discretion.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Access and Interference</p>
          <p className={text3Class}>
            You will not use any robot, spider, scraper, deep link or other similar automated data
            gathering or extraction tools, program, algorithm or methodology to access, acquire,
            copy or monitor our Services or any portion of our Services or for any other purpose,
            without our prior written permission, which may be withheld in our sole discretion.
            Additionally, you will not: (i) take any action that imposes, or may impose, in our sole
            discretion, an unreasonable or disproportionately large load on our infrastructure; (ii)
            copy, reproduce, modify, create derivative works from, distribute or publicly display
            any Content or Collective Work (except for Your Information) from our Services without
            our prior written permission, which may be withheld in our sole discretion, and the
            permission of the appropriate third party, as applicable; (iii) interfere or attempt to
            interfere with the proper working of our Services or any activities conducted on our
            Services; (iv) avoid, bypass, remove, deactivate, impair, descramble or otherwise
            circumvent any technological measure implemented by RenewMe or any of RenewMe’s
            third-party service providers or any other third party (including another user) to
            prevent or restrict access to our Services; (v) access or use non-public areas of the
            Services, RenewMe’s computer systems or the technical delivery systems of RenewMe’s
            third-party service providers; or (vi) attempt to probe, scan or test the vulnerability
            of any RenewMe system or network or breach any security or authentication measures. We
            may, without prior notice to you, immediately disconnect your access to and use of our
            Services if you interfere or disrupt our Services.
          </p>
          <p className={text3Class}>
            Notwithstanding the foregoing, we grant the operators of public search engines
            permission to use spiders to copy materials from our Services for the sole purpose of,
            and solely to the extent necessary, creating publicly available search indices of the
            materials on or within our Services, but not caches or archives of such materials. We
            may revoke these exceptions either generally or in specific cases. You will not collect
            or harvest any personally identifiable information, including account names, from our
            Services. You will not use any communication systems provided on our Services (such as
            messaging features or email) for any commercial or solicitation purposes. You will not
            solicit for commercial purposes any users of our Services via image, video, text or any
            other method without our prior written consent, which may be withheld in our sole
            discretion.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Our Products and Services</p>
          <p className={text3Class}>
            You may have the ability to purchase, subscribe to or otherwise obtain subscriptions,
            enhanced features and other products or services, such as video or audio tracks
            (collectively, <strong>“Products”</strong>), on or through our Services (a{' '}
            <strong>“Transaction”</strong>). All Transactions are governed by this Agreement. You
            may be required to subscribe to our Services, including the RenewMe App, in order to
            purchase or access Products or otherwise make or access a Transaction. Advertised prices
            and available quantities are subject to change without notice. We may, in our sole
            discretion and without any notice to you, limit, change or restrict our Product
            offerings to you for any or no reason, subject to applicable laws. Our Services may
            contain technical inaccuracies and typographical or other errors in connection with the
            Products, including prices or available quantities applicable to a Transaction. We make
            no representations and assume no responsibility as to the completeness, accuracy or
            timeliness of any Content on or describing our Services (including any features,
            reviews, ratings, specifications, policies and prices and available quantities). We may,
            in our sole discretion, honor Transactions or information affected by any errors,
            inaccuracies or omissions in connection with our Services. We may make changes,
            corrections, cancellations or improvements to our Services, and to the related Products
            and programs described, at any time without notice, including after confirmation of a
            Transaction. Further, you expressly agree that any Transaction is not contingent on the
            delivery of any future functionality or features, or dependent on any oral or written
            public comments made by us regarding future functionality or features.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Transactions</p>
          <p className={text3Class}>
            If you wish to make a Transaction, you may be asked to supply certain relevant
            information, such as your name, your credit card number and its expiration date and your
            billing address. You represent and warrant that you have the right to use any credit
            card or third-party payment processing account, including your account with any
            applicable app store or distribution platform (such as the Apple App Store, Google Play
            or the Amazon Appstore) (each, an “App Provider”), that you submit in connection with a
            Transaction. By submitting such information, you grant to us the right to provide such
            information to third parties for purposes of facilitating Transactions and you agree
            that we and any of our third-party payment processors are authorized to immediately
            debit or credit your account for all applicable fees and charges and that no additional
            notice or consent is required. You will pay all charges incurred by you or on your
            behalf through our Services, at the prices in effect when such charges are incurred. In
            addition, you are responsible for any taxes applicable to your Transactions.
          </p>
          <p className={text3Class}>
            You will immediately notify us of any change in your payment and financial information.
            We reserve the right at any time to change prices and billing methods. All information
            that you provide to us or our third-party payment processors must be accurate, current
            and complete. Verification of information may be required prior to the acknowledgment or
            completion of any Transaction. If you have any concerns or objections regarding charges,
            you agree to raise them with us first, and you agree not to cancel or reject any credit
            card or third-party payment processing charges unless you have made a reasonable attempt
            to resolve the matter directly with us.
          </p>
          <p className={text3Class}>
            By making a Transaction, you represent and warrant that the applicable Products will be
            used only in a lawful manner, and all Products purchased by you are for personal or gift
            use and not for commercial use or resale. We may, in our sole discretion and without
            prior notice, (i) limit the available quantity of or discontinue making available any
            Product; (ii) impose conditions on the honoring of any coupon, discount or similar
            promotion; (iii) bar any user from making any Transaction; and (iv) refuse to provide
            any user with any Product.
          </p>
          <p className={text3Class}>
            We are not responsible for communication failures, errors, difficulties or other
            malfunctions or lost, stolen or misdirected transactions, transmissions, messages or
            entries on or in connection with our Services. We are not responsible for any incorrect
            information associated with any Transaction on or to our Services regardless of whether
            such incident is the result of user error, system error or human error. We may, in our
            sole discretion, cancel or reverse any payment, even if it has been previously confirmed
            by us, as a result of any mistake or error, including any mistaken pricing or service
            description or other error.
          </p>
          <p className={text3Class}>
            WE MAKE NO WARRANTY OR REPRESENTATION REGARDING THE CONFIDENTIALITY OF ANY COMMUNICATION
            OR INFORMATION TRANSMITTED ON OUR SERVICES OR ANY LINKS ASSOCIATED WITH OUR SERVICES. WE
            WILL NOT BE RESPONSIBLE OR LIABLE IN ANY WAY FOR ANY INJURY, LOSS OR DAMAGE TO YOUR
            COMPUTER, MOBILE PHONE OR OTHER DEVICE, OR INTERCEPTION OR USE OF CREDIT CARD OR
            FINANCIAL INFORMATION OR OTHER PERSONALLY IDENTIFIABLE INFORMATION, RELATED TO OR
            RESULTING FROM USE OF OUR SERVICES OR ANY LINKS ASSOCIATED WITH OUR SERVICES. ALL
            TRANSACTIONS ARE NON-REFUNDABLE.
          </p>
          <p className={text3Class}>
            <strong>
              Subscriptions Automatically Renew Until You Cancel; How to Cancel Your Subscription
            </strong>
          </p>
          <p className={text3Class}>
            All charges incurred in connection with any Transaction are payable and charged (i) for
            one-off purchase, at the time you place your order; or (ii) for monthly or yearly
            subscriptions, at the beginning of the subscription and, because each such subscription
            renews automatically for an additional period equal in length to the expiring
            subscription term until you cancel it, at the time of each renewal until you cancel,
            using the payment information you have provided. You must cancel your monthly or yearly
            subscription before it renews to avoid the billing of the fees for the next subscription
            period. You may cancel the renewal of your subscription at any time with your applicable
            App Provider. You will not receive a refund for the fees you already paid for your
            current subscription period and you will continue to receive the Services ordered until
            the end of your current subscription period. You may also upgrade your subscription at
            any time, but the remaining days on your current subscription will be non-refundable.
            Further, all yearly subscriptions are non-refundable.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Your Communication and Interaction with Other RenewMe Users</p>
          <p className={text3Class}>
            You are responsible for your interactions and exchanges with other RenewMe users.
            RenewMe will not be responsible for any communication, interaction or provision of
            services between or among RenewMe users whatsoever. You agree and understand that (i) we
            have no control over the conduct of any RenewMe user; (ii) any claims or causes of
            action arising out of any action or inaction of any RenewMe user will be exclusively
            between you and such user, and not us; and (iii) we disclaim any and all liability
            relating to your interactions with any RenewMe user. Any representations made to you by
            any RenewMe user are made solely at the discretion of such user and we have no way to
            monitor or validate, and will not be responsible or liable in any way for, any
            representations or statements made to you by any RenewMe user. You understand and
            acknowledge that we will have no liability to you for any statements or representations
            made by any RenewMe user to you as a result of your use of our Services.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Third-Party Materials</p>
          <p className={text3Class}>
            There may be provided on or through our Services links or access to other websites,
            mediums, content or materials belonging to our advertisers, business partners,
            affiliates and other third parties. Such links and access do not constitute our
            endorsement of those third parties, nor the products or services of those third parties.
            We are not responsible for the activities or policies of those third parties. We accept
            no responsibility for such third parties or for any loss or damage that may arise from
            your use of the third-party links or the products or services of those third parties. We
            do not guarantee that the terms, prices or other content offered by any particular
            advertiser, business partner, affiliate or other third party on or through our Services
            are accurate or the best terms or lowest or best prices available in the market.
          </p>
          <p className={text3Class}>
            You acknowledge and agree that we are not responsible for any third-party materials,
            including their accuracy, completeness, timeliness, validity, copyright compliance,
            legality, decency, quality or any other aspect thereof. Third-party materials may
            contain information with which we may or may not agree. All third-party materials and
            links are provided solely as a convenience to you. If you decide to access any of the
            third-party websites or mediums, you do so entirely at your own risk and subject to the
            terms and conditions of use of such third-party websites and mediums.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Promotions</p>
          <p className={text3Class}>
            As provided in our Privacy Policy, we or our third-party service providers may mail,
            email, telephone or contact you by other means to notify you of exclusive offers,
            events, updates, sweepstakes, contests or other promotions (collectively, “Promotions”).
            We also may display or provide information regarding such Promotions on our Services.
            All Promotions may be governed by any associated rules posted in connection with such
            Promotions, which are expressly incorporated by reference into this Agreement. Please
            refer to and read carefully such other terms and conditions. To the extent that such
            other terms and conditions conflict with this Agreement, such other terms and conditions
            will apply and control.
          </p>
          <p className={text3Class}>
            Promotions may require you to provide Your Information (subject to this Agreement) in
            order to participate. Each Promotion is (i) void where prohibited by applicable laws,
            regulations or rules; (ii) not applicable to prior purchases and cannot be combined with
            any other offer, discount or coupon; and (iii) subject to availability and while stock
            or supplies lasts. We may, in our sole discretion and without any notice to you, alter,
            change, withdraw or cancel any Promotion, or any person’s participation in any
            Promotion, at any time for any reason. For instance, we may disqualify entries for any
            Promotion that are late, misdirected, incomplete, corrupted, lost, illegible or invalid
            or where appropriate parental consent has not been provided.
          </p>
          <p className={text3Class}>
            Unless the associated rules posted in connection with a Promotion provide otherwise, (a)
            entries are limited to one per person and entries via agents or third parties or the use
            of multiple identities are not permitted; (b) use of automated entries, votes or other
            programs is prohibited and all such entries (or votes) will be disqualified; (c)
            Promotions are not open to our employees (or their immediate families) or anyone else
            professionally associated with such Promotion; (d) you are solely responsible for all
            taxes in connection with your participation in any Promotion, except we reserve the
            right to withhold applicable taxes, and you agree to complete any required tax forms as
            reasonably requested by us; (e) no prize or entry in connection with a Promotion is
            transferable, refundable and negotiable, and no prize may be exchangeable for cash or
            any other benefit, except that we (or the party providing a prize) reserve the right to
            substitute a similar prize of equal or greater value; and (f) (i) your acceptance of a
            prize constitutes agreement to participate in reasonable publicity related to any
            Promotion and grants us an unconditional right to use your name, likeness, town or city
            and state, prize information and statements by you about the Promotion for publicity,
            advertising and promotional purposes, subject to applicable law, without any additional
            permission from, or compensation to, you whatsoever; and (ii) as a condition to
            receiving any prize in connection with any Promotion, you (or your parent or guardian)
            may be required to sign and return an affidavit of eligibility, liability release and
            publicity release.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Electronic Communications</p>
          <p className={text3Class}>
            As part of your access or use of our Services, you may receive notifications, text
            messages, alerts, posts, notices, emails or other communications (including by regular
            mail). You agree to the receipt of such communications. You also agree that any
            electronic communication satisfies any legal requirement that such communication be in
            writing. You may have the ability to control receipt of certain non-service related
            communications (e.g., newsletters or certain other communications other than those
            related to the completion of your registration, correction of user data, change of
            password or other similar communications essential to any transaction on or through our
            Services) through your account settings or as otherwise described in our Privacy Policy.
            You are responsible for any messaging or data fees you may be charged for such
            communications.
          </p>
          <p className={text3Class}>
            Without limiting the foregoing, we may give notice to you at the email address you
            provide to us when you register. Notice will be deemed received and properly served
            immediately when posted on our Services or when an email or other electronic
            communication is sent. In proving the service of any notice via email, it will be
            sufficient to prove that such email was sent to the specified email address of the
            addressee.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Authorization to Contact You</p>
          <p className={text3Class}>
            By using our Services, you authorize us and our agents, representatives and independent
            contractors to contact you at any telephone number (including telephone numbers
            associated with mobile, cellular, wireless or similar devices) you provide to us or from
            which you place a call to us, or any telephone number at which we reasonably believe we
            may reach you, using any means of communication, including calls or text messages using
            an automatic telephone dialing system or prerecorded messages, even if you incur charges
            for receiving such communications.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Your Responsibility for Equipment and Related Costs</p>
          <p className={text3Class}>
            You are solely responsible for obtaining and maintaining all telephone, computer
            hardware, Internet access services and other equipment or services needed to access and
            use our Services, and all costs and fees associated with Internet access, long distance
            charges or carrier rates (including phone, data and text messaging rates) incurred with
            regard to your access and use of our Services.
          </p>
          <p className={text3Class}>
            Mobile Services <br />
            Aspects of our Services may include certain applications for your mobile device
            (collectively, the “Mobile Services”). By using the Mobile Services, you:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">
              Acknowledge that this Agreement is between you and us and not with Apple, Inc.,
              Google, Inc. or any other third party;
            </li>
            <li className="pb-5">
              Agree not to use or manipulate the Mobile Services on your mobile device while driving
              or operating any other heavy machinery;
            </li>
            <li className="pb-5">
              Consent to the collection, use, sharing and onward transfer of Your Information and
              other data, including photos, voice and location data, as outlined in our Privacy
              Policy. Location data may be from mixed sources and may not be accurate. Please use
              this data at your own risk;
            </li>
            <li className="pb-5">
              Acknowledge that certain parts of the Mobile Services require phone service, data
              access or text messaging capability. Except as otherwise noted, carrier rates for
              phone, data and text messaging may apply; and
            </li>
            <li className="pb-5">
              Acknowledge that we may, in our sole discretion and at any time, change, suspend,
              remove or disable access to content or other materials comprising part of the Mobile
              Services at any time without notice. In no event will we be liable for making these
              changes. We may also impose limits on the use or access of certain features or
              portions of the Mobile Services, in any case without notice or liability.
            </li>
          </ul>
          <p className={text3Class}>
            Any mobile application(s) made available by us (the <strong>“Apps”</strong>) are
            licensed, not sold, to you. Your license to the Apps is subject to your prior acceptance
            of this Agreement and you agree that this Agreement will apply to the Apps that you
            license. Your license to any Apps under this Agreement is granted by us. Any App that is
            subject to the license granted under this Agreement is referred to herein as a{' '}
            <strong>“Licensed Application.”</strong> We reserve all rights in and to any Licensed
            Applications not expressly granted to you under this Agreement.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Scope of License</p>
          <p className={text3Class}>
            This license granted to you for any Licensed Application is a limited, non-exclusive and
            nontransferable license to (i) download, install and use the Licensed Application for
            your personal, non-commercial use on a single, compatible mobile device that you own or
            control (“Mobile Device”), as permitted by this Agreement and subject to any additional
            rules and restrictions imposed upon you by third parties, such as rules and restrictions
            imposed by your mobile device provider and your mobile application store provider
            (“Third-Party Rules”); and (ii) access, stream, download and use on such Mobile Device
            the Content and the Mobile Services made available in or otherwise accessible through
            the Licensed Applications, strictly in accordance with this Agreement. For the avoidance
            of doubt, this license does not allow you to use any Licensed Application on any Mobile
            Device that you do not own or control, and you may not distribute or make any Licensed
            Application available over a network where it could be used by multiple devices at the
            same time. You may not rent, lease, lend, sell, transfer, redistribute or sublicense any
            Licensed Application and, if you sell or otherwise transfer your Mobile Device to a
            third party, you must remove each Licensed Application from the Mobile Device before
            doing so. You may not copy (except as expressly permitted by this license and the
            Third-Party Rules), decompile, reverse-engineer, disassemble, attempt to derive the
            source code of, modify or create derivative works of any Licensed Application, any
            Updates (as defined below), or any part of any Licensed Application or Update (except as
            and only to the extent that any foregoing restriction is prohibited by applicable law or
            to the extent as may be permitted by the licensing terms governing use of any
            open-sourced components included in the Licensed Applications). Any attempt to do so is
            a violation of our rights and the rights of our licensors. If you breach this
            restriction, you may be subject to prosecution and damages.
          </p>
          <p className={text3Class}>
            The terms of this license will govern any Updates, unless such Update is accompanied by
            a separate license in which case the terms of that license will govern.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Consent to Use of Data</p>
          <p className={text3Class}>
            You acknowledge that, when you download, install or use any Licensed Application, we may
            collect and use (i) automatic means (including, for example, cookies and web beacons) to
            collect information about your Mobile Device and about your use of the Licensed
            Application; and (ii) technical data and related information that is gathered
            periodically to facilitate the provision of software updates, product support and other
            services to you (if any) related to the Licensed Application. We may use this
            information to improve our Services or to provide other products, services or
            technologies to you and as otherwise set forth in our Privacy Policy.
          </p>
          <p className={text3Class}>
            The terms of this license will govern any Updates, unless such Update is accompanied by
            a separate license in which case the terms of that license will govern.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Termination</p>
          <p className={text3Class}>
            This license to use these Licensed Applications is effective until terminated by you or
            us. You may terminate this license by deleting the Licensed Application and all copies
            of such Licensed Application from your Mobile Device. We may terminate this license at
            any time for any or no reason without notice. Additionally, this license will terminate
            automatically without notice from us if you fail to comply with any term of this
            Agreement. Upon termination of this license, you will cease all use of such Licensed
            Application and destroy all copies, full or partial, of such Licensed Application. Any
            termination of this license will not limit any of our rights or remedies available at
            law or in equity.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Updates</p>
          <p className={text3Class}>
            We may, from time to time, in our sole discretion develop and provide Licensed
            Application updates, which may include upgrades, bug fixes, patches and other error
            corrections or new features (collectively, including related documentation, “Updates”).
            Updates may also modify or delete in their entirety certain features and functionality.
            You agree that we have no obligation to provide any Updates or to continue to provide or
            enable any particular features or functionality. Based on your Mobile Device settings,
            when your Mobile Device is connected to the Internet either:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">
              The Licensed Application will automatically download and install all available
              Updates; or
            </li>
            <li className="pb-5">
              You may receive notice of or be prompted to download and install available Updates.
            </li>
          </ul>
          <p className={text3Class}>
            You will promptly download and install all Updates. You hereby acknowledge and agree
            that the Licensed Application or portions of such Licensed Application may not properly
            operate should you fail to do so.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Export Regulation</p>
          <p className={text3Class}>
            Our Services (including any Content and Licensed Application) may be subject to United
            States export control laws, including the US Export Administration Act and its
            associated rules, restrictions and regulations. You will not, directly or indirectly,
            export, re-export or release any of our Services (including any Content and Licensed
            Application) to, or make any of our Services (including any Content and Licensed
            Application) accessible from, any jurisdiction or country to which export, re-export or
            release is prohibited by law, rule or regulation. You will comply with all applicable
            laws, restrictions, regulations and rules, and complete all required undertakings
            (including obtaining any necessary export license or other governmental approval), prior
            to exporting, re-exporting, releasing or otherwise making any of our Services (including
            any Content and Licensed Application) available outside of the United States (which
            excludes all United States territories and possessions).
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>International Users</p>
          <p className={text3Class}>
            Our Services are controlled, operated and administered by us from our offices within the
            United States of America. We make no representations that our Services are permissible,
            appropriate or available for use in other jurisdictions. If you access any Services from
            a location outside the United States of America, then you do so by your own volition and
            you are solely responsible for compliance with all laws, regulations and rules
            (including local laws and any applicable United States export control laws). You will
            not use our Services or any Content in a manner prohibited by any applicable state,
            federal, international or local laws, rules, restrictions or regulations.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Copyright Infringement</p>
          <p className={text3Class}>
            It is our policy to comply with the Digital Millennium Copyright Act, title 17, United
            States Code, Section 512, including responding to notices of alleged copyright
            infringement, and other applicable intellectual property laws. We may, in appropriate
            circumstances, disable or terminate the accounts of users who may infringe or repeatedly
            infringe the copyrights or other intellectual property rights of ours or others.
          </p>
          <p className={text3Class}>
            <strong>Notifications</strong>
          </p>
          <p className={text3Class}>
            Notifications of claimed copyright infringement (each a “Notification”) should be sent
            by either express mail or U.S. mail to:
          </p>
          <p className={text3Class}>
            <strong>RenewMe</strong>
            <br />
            Attention: Legal
            <br />
            299 Camino Gardens Blvd, Suite 100
            <br />
            Boca Raton, Florida 33432
            <br />
            Email address of designated agent:{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>
          </p>
          <p className={text3Class}>
            Pursuant to Title 17, United States Code, Section 512(c)(3), to be effective, each
            Notification must include the following:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">
              The Licensed Application will automatically download and install all available
              Updates;
            </li>
            <li className="pb-5">
              Identification of the copyrighted work claimed to have been infringed, or if multiple
              copyrighted works at a single online site are covered by a single Notification, a
              representative list of such works at that site;
            </li>
            <li className="pb-5">
              Identification of the material that is claimed to be infringing or to be the subject
              of infringing activity and that is to be removed or access to which is to be disabled,
              and information reasonably sufficient to permit us to locate the material;
            </li>
            <li className="pb-5">
              Information reasonably sufficient to permit us to contact the Complaining Party, such
              as an address, telephone number, and if available, an email address at which the
              Complaining Party may be contacted;
            </li>
            <li className="pb-5">
              A statement that the Complaining Party has a good faith belief that use of the
              material in the manner complained of is not authorized by the copyright owner, its
              agent, or the law; and
            </li>
            <li>
              A statement that the information in the Notification is accurate, and under penalty of
              perjury, that the Complaining Party is authorized to act on behalf of the owner of an
              exclusive right that is allegedly infringed.
            </li>
          </ul>
          <p className={text3Class}>
            Upon receipt of the Notification containing the information as outlined in (i) through
            (vi) above, and pursuant to Title 17, United States Code, Section 512:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">
              We will remove or disable access to the material that is alleged to be infringing;
            </li>
            <li className="pb-5">
              We will forward the Notification to the alleged infringer (“Subscriber”); and
            </li>
            <li>
              We will take reasonable steps to promptly notify the Subscriber that we have removed
              or disabled access to the material.
            </li>
          </ul>
          <p className={text3Class}>
            <strong>Counter Notification</strong>
          </p>
          <p className={text3Class}>
            Pursuant to Title 17, United States Code, Section 512(g)(3), a Subscriber may counter a
            Notification by providing a written communication (“Counter Notification”) to our
            designated agent that includes substantially the following:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">A physical or electronic signature of the Subscriber;</li>
            <li className="pb-5">
              Identification of the material that has been removed or to which access has been
              disabled and the location at which the material appeared before it was removed or
              access to it was disabled;
            </li>
            <li className="pb-5">
              A statement under penalty of perjury that the Subscriber has a good faith belief that
              the material was removed or disabled as a result of mistake or misidentification of
              the material to be removed or disabled;
            </li>
            <li>
              And the Subscriber’s name, address, and telephone number, and a statement that the
              Subscriber consents to the jurisdiction of Federal District Court for the judicial
              district in which the address is located, or if the Subscriber’s address is outside of
              the United States, for any judicial district in which we may be found, and that the
              Subscriber will accept service of process from the person who provided the Counter
              Notification or an agent of such person.
            </li>
          </ul>
          <p className={text3Class}>
            Upon receipt of a Counter Notification containing the information as outlined in (i)
            through (iv) above, and pursuant to Title 17, United States Code, Section 512:
          </p>
          <ul className={`${text3Class} list-decimal pl-7`}>
            <li className="pb-5">
              We will promptly provide the Complaining Party with a copy of the Counter
              Notification;
            </li>
            <li className="pb-5">
              We will inform the Complaining Party that we will replace the removed material or
              cease disabling access to the removed material within 10 business days; and
            </li>
            <li>
              We will replace the removed material or cease disabling access to the removed material
              not less than 10 business days, nor more than 14 business days following receipt of
              the Counter Notification, provided our designated agent has not received notice from
              the Complaining Party that an action has been filed seeking a court order to restrain
              the Subscriber from engaging in infringing activity relating to the removed material
              on our network or system.
            </li>
          </ul>
        </section>
        <section className="pb-7">
          <p className={text2Class}>
            We Make No Representations or Warranties Regarding Our Services or the Content
          </p>
          <p className={text3Class}>
            You expressly agree that your use of our Services (including any Mobile Services and any
            Licensed Applications), the Content and all information, content, materials, products
            and services is at your sole risk. It is your sole responsibility to independently
            evaluate the accuracy, correctness or completeness of our Services, the Content and all
            information, content, materials, products and services. Our Services (including any
            Mobile Services and any Licensed Applications), the Content and all information,
            content, materials, products and services included on or associates with our Services
            are provided to you on an “as-is” and “as available” basis. We make no representations
            or warranties of any kind, express or implied, as to the operation of these Services
            (including any Mobile Services and any Licensed Applications), the Content or the
            information, content, materials, products or services included on or associated with our
            Services, including their accuracy, correctness, completeness, safety, reliability,
            title, timeliness, non-infringement, merchantability, conformity or fitness for a
            particular purpose.
          </p>
          <p className={text3Class}>
            Without limiting the foregoing, you acknowledge that we cannot guarantee the continuous
            operation of or access to our Services. You further acknowledge that operation of and
            access to our Services may be interfered with as a result of technical issues or
            numerous factors outside of our control. Notwithstanding anything to the contrary in
            this Agreement or the Privacy Policy, we make no representation, warranty or guarantee
            that our Services or the Content that may be available for downloading from our Services
            is free of infection from any viruses, worms, Trojan horses, trap doors, back doors,
            easter eggs, time bombs, cancelbots or other code or computer programming routines that
            contain contaminating or destructive properties or that are intended to damage,
            detrimentally interfere with, surreptitiously intercept or expropriate any system, data
            or personal information. We will not be liable for any loss or damage caused by a
            distributed denial-of-service attack, viruses or other technologically harmful material
            that may infect your computer, device, data, programs or other equipment or material due
            to your use of the Services or items obtained through the Services or to your
            downloading of any material posted on the Services or any links to the Services.
          </p>
          <p className={text3Class}>
            The foregoing does not affect any warranties which cannot be excluded or limited under
            applicable law.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Limitations on Our Liability</p>
          <p className={text3Class}>
            IN NO EVENT ARE WE RESPONSIBLE OR LIABLE TO YOU OR ANY THIRD PARTY, WHETHER RESULTING,
            IN WHOLE OR IN PART, FROM BREACH OF CONTRACT, WARRANTY, TORT (INCLUDING STRICT LIABILITY
            AND NEGLIGENCE) OR OTHERWISE, FOR ANY DAMAGES, INCLUDING SPECIAL, INCIDENTAL, EXEMPLARY,
            INDIRECT, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT INCLUDE DAMAGES FOR ANY PERSONAL OR
            BODILY INJURY, EMOTIONAL DISTRESS, INJURIES TO PROPERTY AND LOSS OF PROFIT, REVENUE OR
            BUSINESS, AS A DIRECT OR INDIRECT RESULT OF: (I) YOUR BREACH OR VIOLATION OF ANY TERM OR
            CONDITION OF THIS AGREEMENT; (II) YOUR ACCESS AND USE OF OUR SERVICES (INCLUDING ANY
            MOBILE SERVICES OR LICENSED APPLICATIONS), THE USER GENERATED CONTENT OR THE CONTENT;
            (III) YOUR DELAY IN ACCESSING OR INABILITY TO ACCESS OR USE OUR SERVICES FOR ANY REASON;
            (IV) YOUR DOWNLOADING OR USE OF ANY OF THE CONTENT, THE COLLECTIVE WORK OR USER
            GENERATED CONTENT; (V) YOUR RELIANCE UPON OR USE OF OUR SERVICES, THE USER GENERATED
            CONTENT, THE CONTENT OR THE COLLECTIVE WORK; (VI) ANY TRANSACTION OR PROCESSING OF A
            TRANSACTION; (VII) ANY THIRD PARTY’S USE OF OUR SERVICES ON YOUR BEHALF; (VIII) THE
            BREACH OF OUR SECURITY AND UNAUTHORIZED DISCLOSURE OF YOUR INFORMATION; (IX) YOUR
            COMMUNICATION OR INTERACTION WITH ANY OTHER USER; OR (X) ANY INFORMATION, SOFTWARE,
            PRODUCTS OR SERVICES OBTAINED ON OR THROUGH OUR SERVICES, OR OTHERWISE ARISING OUT OF
            THE USE OF OUR SERVICES, EVEN IF WE OR OUR AGENTS, REPRESENTATIVES, LICENSORS, VENDORS,
            SUPPLIERS OR ANY OTHER APPLICABLE THIRD PARTY HAVE BEEN ADVISED OF THE POSSIBILITY OF
            DAMAGES. EXCEPT AS OTHERWISE EXPRESSLY STATED BY US IN WRITING AT THE TIME OF PURCHASE
            OR OTHERWISE, OUR LIABILITY AND THE LIABILITY OF OUR DIRECTORS, OFFICERS, MEMBERS,
            MANAGERS, EMPLOYEES, INDEPENDENT CONTRACTORS, SHAREHOLDERS, REPRESENTATIVES AND AGENTS
            ARISING OUT OF THIS AGREEMENT WILL NOT EXCEED $100.
          </p>
          <p className={text3Class}>
            YOU SPECIFICALLY ACKNOWLEDGE THAT WE WILL NOT BE LIABLE FOR USER GENERATED CONTENT OR
            THE DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF ANY THIRD PARTY, AND THAT THE RISK OF
            HARM OR DAMAGE FROM SUCH USER GENERATED CONTENT AND THIRD-PARTY CONDUCT RESTS ENTIRELY
            WITH YOU. IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE THAT WE WILL NOT BE LIABLE FOR ANY
            CONSEQUENCES OF ACTIONS YOU TAKE OR FAIL TO TAKE BASED ON USER GENERATED CONTENT,
            PHOTOGRAPHS OR RECORDINGS, INCLUDING DEATH, PERSONAL INJURY, PROPERTY DAMAGE OR
            EMOTIONAL DISTRESS, AND THAT THE RISK OF HARM OR DAMAGE FROM SUCH ACTIONS OR INACTIONS
            RESTS ENTIRELY WITH YOU.
          </p>
          <p className={text3Class}>
            YOU AND WE AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO OUR SERVICES MUST
            COMMENCE WITHIN 1 YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF
            ACTION IS PERMANENTLY BARRED.
          </p>
          <p className={text3Class}>
            Certain state laws do not allow limitations on implied warranties or the exclusion or
            limitation of certain damages. If these state laws apply to you, some or all of the
            above disclaimers, exclusions or limitations may not apply to you.
          </p>
          <p className={text3Class}>
            In the event that any limitation on the period of time for bringing an action, claim,
            dispute or proceeding against us, located in this Limitations on Our Liability section,
            is determined or held to be inapplicable or unenforceable by any court, arbitration
            panel or other tribunal, then the statute of limitations for the State of Florida,
            including Florida Statutes Section 95, will apply to any such action, claim, dispute or
            proceeding referred to final or binding arbitration.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Your Indemnification of Us</p>
          <p className={text3Class}>
            You will indemnify, defend and hold harmless us, our affiliates and our respective
            officers, directors, members, managers, shareholders, employees, independent
            contractors, agents and representatives from and against all claims and expenses,
            including attorneys’ fees (including any and all actions (including subpoenas,
            interrogatories, responses, depositions, diligence requests, document requests and other
            requests or notices to produce documents or testify) claims, liabilities, damages,
            losses and expenses (including advancement of attorneys’ fees and paralegal fees and
            other costs and expenses), whether suit is instituted or not (and including any
            mediation, hearing or trial), and if instituted, whether at the pretrial, trial or
            appellate level), arising out of or attributable to (i) any breach or violation of this
            Agreement; (ii) your failure to provide accurate, complete and current Your Information
            requested or required by us; (iii) your access or use of our Services or the Content;
            (iv) access or use of our Services under any password that may be issued to you; (v)
            your transmissions, submissions or postings (for example, your own User Generated
            Content); (vi) your communication or interaction with any user; or (vii) any personal
            injury, property damage or emotional distress caused by you.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Our Remedies</p>
          <p className={text3Class}>
            You acknowledge that we may be irreparably damaged if this Agreement is not specifically
            enforced, and damages at law would be an inadequate remedy. Therefore, in the event of a
            breach or threatened breach of any provision of this Agreement by you, we will be
            entitled, in addition to all rights and remedies, to an injunction restraining such
            breach or threatened breach, without being required to show any actual damage or to post
            an injunction bond, or to a decree for specific performance of the provisions of this
            Agreement. For purposes of this Our Remedies section, you agree that any action or
            proceeding with regard to such injunction restraining such breach or threatened breach
            will be brought in the courts of record of Palm Beach County, Florida, or the United
            States District Court, Southern District of Florida. You consent to the jurisdiction of
            such court and waive any objection to the laying of venue of any such action or
            proceeding in such court. Service of any court paper may be effected on such party by
            mail or in such other manner as may be provided under applicable laws, regulations,
            rules of procedure or local rules.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Legal Disputes</p>
          <p className={text3Class}>
            You and we agree that any claim or dispute at law or equity that has arisen or may arise
            between us relating in any way to or arising out of this Agreement or your use of or
            access to the Services will be resolved in accordance with the provisions set forth in
            this Legal Disputes section. Please read this Legal Disputes section carefully. It
            affects your rights and will have a substantial impact on how claims you and we have
            against each other are resolved.
          </p>
          <p className={text3Class}>
            <strong>Applicable Law</strong>
            <br />
            This Agreement is to be governed by and construed in accordance with the internal laws
            of the State of Florida, without regard for principles of conflicts of laws. The
            application of the United Nations Convention on Contracts for the International Sale of
            Goods is expressly excluded.
          </p>
          <p className={text3Class}>
            You agree that: (i) our Services will be deemed solely based in the State of Florida;
            and (ii) our Services will be deemed passive Services that do not give rise to personal
            jurisdiction over us and our assigns, either specific or general, in jurisdictions other
            than the State of Florida.
          </p>
          <p className={text3Class}>
            <strong>Agreement to Arbitrate</strong>
            <br />
            Any civil action, claim, dispute or proceeding arising out of or relating to this or any
            previous version of this Agreement, your use of or access to our Services or any
            products or services sold, offered or purchased on or through our Services, except for
            an injunctive action regarding a breach or threatened breach of any provision of this
            Agreement by you as provided above, will be resolved exclusively through final and
            binding arbitration, before a single arbitrator, rather than in court. The Federal
            Arbitration Act governs the interpretation and enforcement of this Agreement to
            Arbitrate section (this “Agreement to Arbitrate”).
          </p>
          <p className={text3Class}>
            Arbitration is more informal than a lawsuit in court. There is no judge or jury in
            arbitration, and court review of an arbitration award is very limited. However, an
            arbitrator can award the same damages and relief on an individual basis that a court can
            award to an individual. An arbitrator should apply the terms of this Agreement as a
            court would.
          </p>
          <p className={text3Class}>
            The arbitrator, and not any federal, state or local court or agency, will have exclusive
            authority to resolve any dispute arising out of or relating to the interpretation,
            applicability, enforceability or formation of this Agreement to Arbitrate, any part of
            it, or of this Agreement, including any claim that all or any part of the Agreement to
            Arbitrate or this Agreement is void or voidable.
          </p>
          <p className={text3Class}>
            The arbitration will be conducted by the American Arbitration Association (the “AAA”) in
            Palm Beach County, Florida, under the AAA’s rules and procedures, including the AAA’s
            Supplementary Procedures for Consumer-Related Disputes (as applicable), as modified by
            this Agreement to Arbitrate. The AAA’s rules are available at{' '}
            <a className="underline" href="https://www.adr.org/">
              www.adr.org
            </a>
            . A form for initiating arbitration proceedings is available on the AAA’s site at{' '}
            <a className="underline" href="https://www.adr.org/">
              https://www.adr.org
            </a>
            .
          </p>
          <p className={text3Class}>
            You and we will select the arbitrator, and if you and we are unable to reach agreement
            on selection of the arbitrator within 30 days after the notice of arbitration is served,
            then the AAA will select the arbitrator. Arbitration will not commence until the party
            requesting arbitration has deposited U.S. $1,000 with the arbitrator for the
            arbitrator’s fees and costs. The party requesting arbitration will advance such sums as
            are required from time to time by the arbitrator to pay the arbitrator’s fees and costs
            until the prevailing party is determined or the parties have agreed in writing to an
            alternate allocation of fees and costs.
          </p>
          <p className={text3Class}>
            The arbitrator will decide the substance of all claims in accordance with the laws of
            the State of Florida, including recognized principles of equity, and will honor all
            claims of privilege recognized by law. The arbitrator will not be bound by rulings in
            prior arbitrations involving our other users, but is bound by rulings in prior
            arbitrations involving the same user to the extent required by applicable law. Judgment
            upon any award rendered by the arbitrator is final, binding and conclusive upon you and
            us and your and our respective administrators, executors, legal representatives,
            successors and assigns, and may only be entered in the state or federal courts of record
            for Palm Beach County, Florida.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>
            Prohibition of Class and Representative Actions and Non-Individualized Relief
          </p>
          <p className={text3Class}>
            <strong>
              YOU AND WE AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN
              INDIVIDUAL BASIS AND NOT AS PART OF ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR
              PROCEEDING. UNLESS BOTH YOU AND WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE
              OR JOIN MORE THAN ONE PERSON’S OR PARTY’S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER
              ANY FORM OF A CONSOLIDATED, REPRESENTATIVE OR CLASS PROCEEDING. ALSO, THE ARBITRATOR
              MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE AND DECLARATORY RELIEF) ONLY IN FAVOR
              OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE
              RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT
              AFFECT OTHER USERS.
            </strong>
          </p>
          <p className={text3Class}>
            <strong>
              THEREFORE, YOU DO NOT HAVE THE OPPORTUNITY TO GO TO COURT TO ASSERT OR DEFEND YOUR
              RIGHTS AND YOU GIVE UP YOUR RIGHT TO PARTICIPATE IN OR BRING CLASS ACTIONS. By using
              OUR SERVICES, you consent to these restrictions.
            </strong>
          </p>
          <p className={text3Class}>
            <strong>Judicial Forum for Legal Disputes</strong>
          </p>
          <p className={text3Class}>
            Unless you and we agree otherwise, in the event that the Agreement to Arbitrate above is
            found not to apply to you or to a particular claim or dispute as a result of a decision
            by the arbitrator or a court order, any claim or dispute that has arisen or may arise
            between you and us must be resolved exclusively by a state or federal court located in
            Palm Beach County, Florida. You and we will submit to the personal jurisdiction of the
            courts located within Palm Beach County, Florida for the purpose of litigating all such
            claims or disputes.
          </p>
        </section>
        <section className="pb-7">
          <p className={text2Class}>Miscellaneous</p>
          <p className={text3Class}>
            If any provision of this Agreement is contrary to, prohibited by or deemed invalid under
            applicable law, such provision will be inapplicable and deemed omitted to the extent so
            contrary, prohibited or invalid, but the remainder of this Agreement will not be
            invalidated thereby and will be given full force and effect so far as possible. If any
            provision of this Agreement may be construed in two or more ways, one of which would
            render the provision invalid or otherwise voidable or unenforceable and another of which
            would render the provision valid and enforceable, such provision will have the meaning
            that renders it valid and enforceable.
          </p>
          <p className={text3Class}>
            For purposes of this Agreement, the words “include,” “includes” and “including” are
            deemed to be followed by the words “without limitation”; and the word “or” is not
            exclusive. The headings contained in this Agreement are for convenience of reference
            only, are not to be considered a part of this Agreement, and will not limit or otherwise
            affect in any way the meaning or interpretation of this Agreement.
          </p>
          <p className={text3Class}>
            All covenants, agreements, representations and warranties made in this Agreement, as may
            be amended by us, from time to time, will survive your acceptance of this Agreement and
            the termination of this Agreement.
          </p>
          <p className={text3Class}>
            No failure to exercise, and no delay in exercising, any right or any power set forth in
            this Agreement by us will operate as a waiver of such right or power, nor will any
            single or partial exercise of any right or power under this Agreement by us preclude
            further exercise of that or any other right or power under this Agreement.
          </p>
          <p className={text3Class}>
            We may update, amend or change this Agreement at any time, in our sole discretion and
            without notice. Amendments will take effect immediately upon us posting such updates on
            our Services. We encourage you to periodically check this Agreement for changes, as your
            continued access and use of our Services following the posting of any changes will
            automatically be deemed your acceptance of all changes. If you do not agree to any
            change to this Agreement, you must discontinue using the Services. This Agreement
            replaces all previous notices or statements with respect to this subject, and cannot be
            modified orally or in writing by any of our associates, representatives or any other
            third parties.
          </p>
          <p className={text3Class}>
            We may give, assign or transfer our rights or obligations under this Agreement to any
            person or entity at any time with or without your consent. You may not give, assign or
            transfer your rights or obligations under this Agreement to any person or entity without
            our prior written consent, which may be withheld in our sole discretion. Any attempt to
            assign your rights or obligations under this Agreement without our consent will be void.
          </p>
          <p className={text3Class}>
            We will not be liable for any changes, delays, failures or problems out of our control,
            including any changes, delays, failures or problems caused by natural disasters, war,
            terrorism, riots, embargoes, acts of civil or military authorities, fire, floods,
            accidents, network infrastructure failures, strikes, shortage of transportation
            facilities, fuel, energy, labor or materials and other similar events.
          </p>
          <p className={text3Class}>
            You and we are independent contractors, and no agency, partnership, joint venture,
            employee-employer or franchiser-franchisee relationship is intended or created by this
            Agreement.
          </p>
          <p className={text3Class}>
            This Agreement (together, with the Privacy Policy) represents the entire understanding
            and agreement between you and us regarding the subject matter of this Agreement, and
            supersedes all other previous agreements, understandings or representations regarding
            this Agreement.
          </p>
          <p className={text3Class}>
            If you have questions, comments, concerns or feedback regarding this Agreement or our
            Services, please contact us at{' '}
            <a className="underline" href="mailto:pr@myrenewme.com">
              pr@myrenewme.com
            </a>{' '}
            or
          </p>
        </section>
        <section className="pb-7">
          <p className={text3Class}>
            <strong>RenewMe</strong>
            <br />
            <strong>Attention: Legal</strong>
            <br />
            <strong>299 Camino Gardens Blvd, Suite 100</strong>
            <br />
            <strong>Boca Raton, Florida 33432</strong>
            <br />
          </p>
        </section>
      </TermsWrapper>
    </>
  );
};

export default Terms;
