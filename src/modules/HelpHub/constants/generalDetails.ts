// Define the type for services items
interface Service {
  name?: string;
  phone?: string;
  link1?: string;
  linkDes1?: string;
  url1?: string;
  link2?: string;
  linkDes2?: string;
  url2?: string;
  text?: string;
  description?: string;
}

interface HelpList {
  country: string;
  services: Service[];
}

interface HelpListGeneralItem {
  title: string;
  description: string;
  helpList: HelpList[];
}

// Define the helplist general contents
const HELPLIST_GENERAL_CONTENTS: HelpListGeneralItem[] = [
  {
    title: 'Crisis Help Lines',
    description:
      'If you or someone you know is in crisis and needs help, here are some important helpline phone numbers for immediate assistance. These helplines offer confidential, compassionate support to anyone in need. If you or someone else is in immediate danger, contacting emergency services (e.g., 911, 112, or the local emergency number) is critical.',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'National Suicide Prevention Lifeline:',
            phone: ' 1-800-273-8255',
            text: ' (or 988)',
            description: 'Available 24/7 for suicide prevention and emotional distress.',
          },
          {
            name: 'Crisis Text Line:',
            text: ' Text HOME to 741741',
            description: 'Free, 24/7 text support for those in crisis.',
          },
          {
            name: 'National Domestic Violence Hotline:',
            phone: ' 1-800-799-7233',
            text: ' (SAFE)',
            description: 'Provides help and support for those in abusive situations.',
          },
          {
            name: 'Substance Abuse and Mental Health Services Administration (SAMHSA) Helpline:',
            phone: ' 1-800-662-4357',
            description: 'For help with substance abuse or mental health issues.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'Samaritans:',
            phone: ' 116 123',
            description: 'Free, confidential, 24/7 support for anyone in distress.',
          },
          {
            name: 'Mind:',
            phone: ' 0300 123 3393',
            description: 'For mental health information and support.',
          },
          {
            name: 'Domestic Violence Helpline:',
            phone: ' 0808 2000 247',
            description: 'Free 24-hour national helpline for domestic abuse.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'Canada Suicide Prevention Service:',
            phone: ' 1-833-456-4566',
            text: ' (or text 45645)',
            description: 'Available 24/7 for those in crisis or suicidal distress.',
          },
          {
            name: 'Kids Help Phone:',
            phone: ' 1-800-668-6868',
            text: ' or text CONNECT to 686868',
            description: 'Free 24/7 counseling service for young people.',
          },
          {
            name: 'Hope for Wellness Help Line (Indigenous People Support):',
            phone: ' 1-855-242-3310',
            description: 'Offers mental health counseling and crisis intervention.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: 'Lifeline Australia:',
            phone: ' 13 11 14',
            description: '24/7 crisis support and suicide prevention services.',
          },
          {
            name: 'Beyond Blue:',
            phone: ' 1300 22 4636',
            description: 'For support with depression, anxiety, and related mental health issues.',
          },
          {
            name: '1800RESPECT:',
            phone: ' 1800 737 732',
            description:
              'National sexual assault, domestic, and family violence counseling service.',
          },
        ],
      },
    ],
  },
  {
    title: 'Veterans Assistance',
    description:
      'Here are some key phone numbers for veterans assistance in various areas, including crisis support, healthcare, and other resources for veterans.',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'Veterans Crisis Line:',
            phone: ' 1-800-273-8255',
            text: ' (Press 1) or Text 838255',
            description: 'Available 24/7 for veterans in crisis or emotional distress.',
          },
          {
            name: 'VA Health Care:',
            phone: ' 1-877-222-8387',
            description: 'For information about VA health care services and enrollment.',
          },
          {
            name: 'VA Benefits:',
            phone: ' 1-800-827-1000',
            description:
              'For questions about veterans benefits like pensions, disability, and education.',
          },
          {
            name: 'VA Caregiver Support Line:',
            phone: ' 1-855-260-3274',
            description: 'Support for caregivers of veterans.',
          },
          {
            name: 'National Call Center for Homeless Veterans:',
            phone: ' 1-877-424-3838',
            description:
              'Assistance for veterans experiencing homelessness or at risk of homelessness.',
          },
          {
            name: 'Vet Center Call Center:',
            phone: ' 1-877-927-8387',
            description: '24/7 confidential support for combat veterans and their families.',
          },
          {
            name: 'GI Bill Hotline:',
            phone: ' 1-888-442-4551',
            description: 'For questions about GI Bill education benefits.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'Veterans UK Helpline:',
            phone: ' 0808 1914 218',
            description:
              'Offers support for British veterans with pensions, compensation claims, and welfare support.',
          },
          {
            name: "Combat Stress (UK Veterans' Mental Health Charity):",
            phone: ' 0800 138 1619',
            description: 'Provides mental health support for veterans.',
          },
          {
            name: 'SSAFA (The Armed Forces Charity):',
            phone: ' 0800 731 4880',
            description:
              'Practical, emotional, and financial support for UK veterans and their families.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'Veterans Affairs Canada:',
            phone: ' 1-866-522-2122',
            description: "For assistance with veterans' benefits and services.",
          },
          {
            name: 'Operational Stress Injury Social Support (OSISS):',
            phone: ' 1-800-883-6094',
            description:
              'Peer and family support for Canadian veterans dealing with operational stress injuries.',
          },
          {
            name: 'Veterans Emergency Fund:',
            phone: ' 1-866-522-2122',
            description: 'Financial assistance for veterans in urgent need.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: 'Veterans and Veterans Families Counselling Service (VVCS):',
            phone: ' 1800 011 046',
            description:
              'Free, confidential counselling and support for veterans and their families.',
          },
          {
            name: "Department of Veterans' Affairs General Enquiries:",
            phone: ' 1800 838 372',
            description: 'For information about veteran benefits, pensions, and services.',
          },
        ],
      },
    ],
  },
  {
    title: 'Domestic Violence',
    description: '',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'National Domestic Violence Hotline:',
            phone: ' 1-800-799-7233',
            text: ' (SAFE) or TTY 1-800-787-3224',
            description:
              'Available 24/7 with confidential support for victims of domestic violence. You can also text "START" to 88788 or chat online at',
            link2: ' thehotline.org',
            url2: 'https://www.thehotline.org',
            linkDes2: '.',
          },
          {
            name: 'National Sexual Assault Hotline (RAINN):',
            phone: ' 1-800-656-4673',
            text: ' (HOPE)',
            description: '24/7 support for survivors of sexual violence.',
          },
          {
            name: 'StrongHearts Native Helpline:',
            phone: ' 1-844-762-8483',
            description:
              'Culturally appropriate support for Native Americans and Alaska Natives experiencing domestic violence.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'National Domestic Abuse Helpline (Refuge):',
            phone: ' 0808 2000 247',
            description: 'Free, confidential 24/7 helpline for anyone facing domestic abuse.',
          },
          {
            name: "Men's Advice Line:",
            phone: ' 0808 801 0327',
            description: 'Support for men experiencing domestic abuse.',
          },
          {
            name: 'Respect Phoneline:',
            phone: ' 0808 802 4040',
            description: 'Helpline for those who are worried they might be abusive.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'ShelterSafe:',
            text: ' Visit',
            link1: ' sheltersafe.ca',
            url1: 'https://www.sheltersafe.ca',
            linkDes1: ' to find a shelter and support in your area.',
          },
          {
            name: "Canadian Women's Foundation Violence Prevention Services:",
            phone: ' 1-866-293-4483',
            description: 'Offers assistance to women and girls in domestic violence situations.',
          },
          {
            name: 'Hope for Wellness Helpline (Indigenous Peoples Support):',
            phone: ' 1-855-242-3310',
            description: 'Offers support for Indigenous people facing abuse or violence.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: '1800RESPECT:',
            phone: ' 1800 737 732',
            description:
              '24/7 national sexual assault, domestic, and family violence counseling service.',
          },
          {
            name: "Men's Referral Service:",
            phone: ' 1300 766 491',
            description: 'Support for men concerned about their behavior or experiencing violence.',
          },
        ],
      },
      {
        country: 'Other International Hotlines',
        services: [
          {
            name: 'Global Directory of Domestic Violence Hotlines:',
            text: ' Visit',
            link1: ' HotPeachPages',
            url1: 'http://www.hotpeachpages.net',
            linkDes1: ' for a global list of domestic violence helplines by country.',
          },
        ],
      },
    ],
  },
  // {
  //   title: 'Alcohol and Addiction',
  //   description:
  //     'If you or someone you know is struggling with alcohol or addiction, here are helplines and resources that provide immediate assistance and long-term support for substance abuse and addiction recovery.',
  //   helpList: [
  //     {
  //       country: 'United States',
  //       services: [
  //         {
  //           name: 'Substance Abuse and Mental Health Services Administration (SAMHSA) National Helpline:',
  //           phone: ' 1-800-662-4357',
  //           text: ' (HELP)',
  //           description:
  //             'Available 24/7, SAMHSA offers free, confidential help for individuals facing substance use or mental health issues, including referrals to local treatment facilities.',
  //         },
  //         {
  //           name: 'Alcoholics Anonymous (AA):',
  //           text: ' Visit',
  //           link1: ' www.aa.org',
  //           url1: 'https://www.aa.org',
  //           linkDes1: ' to find a local AA meeting or get help with alcohol addiction.',
  //         },
  //         {
  //           name: 'Narcotics Anonymous (NA):',
  //           text: ' Visit',
  //           link1: ' www.na.org',
  //           url1: 'https://www.na.org',
  //           linkDes1: ' for support with drug addiction and to find meetings.',
  //         },
  //         {
  //           name: 'National Institute on Alcohol Abuse and Alcoholism (NIAAA):',
  //           phone: ' 1-800-662',
  //           text: ' - HELP',
  //           description:
  //             'Provides information and resources for alcohol-related disorders and treatment options.',
  //         },
  //       ],
  //     },
  //     {
  //       country: 'United Kingdom',
  //       services: [
  //         {
  //           name: 'Drinkline:',
  //           phone: ' 0300 123 1110',
  //           description:
  //             "Free and confidential support for those concerned about their drinking or someone else's drinking.",
  //         },
  //         {
  //           name: 'Alcoholics Anonymous UK:',
  //           phone: ' 0800 9177 650',
  //           description:
  //             'Free helpline for anyone struggling with alcohol addiction. You can also visit',
  //           link2: ' www.alcoholics-anonymous.org.uk',
  //           url2: 'https://www.alcoholics-anonymous.org.uk',
  //           linkDes2: ' to find meetings.',
  //         },
  //         {
  //           name: 'FRANK (Drug Addiction Helpline):',
  //           phone: ' 0300 123 6600',
  //           text: ' or Text 82111',
  //           description: '24/7 helpline offering advice and information on drug abuse.',
  //         },
  //       ],
  //     },
  //     {
  //       country: 'Canada',
  //       services: [
  //         {
  //           name: 'Alcoholics Anonymous Canada:',
  //           text: ' Visit',
  //           link1: ' www.aa.org',
  //           url1: 'https://www.aa.org/pages/en_US/find-local-aa',
  //           linkDes1: ' to find local AA meetings and resources for alcohol addiction.',
  //         },
  //         {
  //           name: 'National Addiction Helpline (Canada Drug Rehab):',
  //           phone: ' 1-877-746-1963',
  //           description:
  //             'Offers help and guidance for those struggling with addiction across Canada.',
  //         },
  //         {
  //           name: 'Centre for Addiction and Mental Health (CAMH):',
  //           phone: ' 1-800-463-6273',
  //           description:
  //             'Provides support and treatment options for alcohol and drug-related issues.',
  //         },
  //       ],
  //     },
  //     {
  //       country: 'Australia',
  //       services: [
  //         {
  //           name: 'Alcohol and Drug Foundation:',
  //           phone: ' 1300 858 584',
  //           description:
  //             'Offers information, advice, and referral to treatment for alcohol and drug-related problems.',
  //         },
  //         {
  //           name: 'Alcoholics Anonymous Australia:',
  //           phone: ' 1300 222 222',
  //           description:
  //             'Provides support and resources for individuals struggling with alcohol addiction. You can also visit',
  //           link2: ' www.aa.org.au',
  //           url2: 'https://www.aa.org.au',
  //           linkDes2: ' for meeting information.',
  //         },
  //         {
  //           name: 'DirectLine (Alcohol and Drug Support):',
  //           phone: ' 1800 888 236',
  //           description: '24/7 support service for people with alcohol and drug-related problems.',
  //         },
  //       ],
  //     },
  //     {
  //       country: 'Other Resources',
  //       services: [
  //         {
  //           name: 'SMART Recovery:',
  //           link1: ' www.smartrecovery.org',
  //           url1: 'https://www.smartrecovery.org',
  //           description:
  //             'A science-based addiction recovery program offering online and in-person meetings for people recovering from all types of addiction.',
  //         },
  //         {
  //           name: 'Al-Anon/Alateen:',
  //           link1: ' www.al-anon.org',
  //           url1: 'https://www.al-anon.org',
  //           description:
  //             "Support groups for friends and family members affected by someone else's drinking.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'Eating Disorders',
    description: '',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'National Eating Disorders Association (NEDA) Helpline:',
            phone: ' 1-800-931-2237',
            description:
              'Available Monday-Thursday from 11 a.m.-9 p.m. ET and Friday from 11 a.m.-5 p.m. ET. You can also chat online at',
            link2: ' www.nationaleatingdisorders.org',
            url2: 'https://www.nationaleatingdisorders.org',
            linkDes2: '.',
          },
          { description: 'Text support available by texting "NEDA" to 741741.' },
          {
            name: 'Crisis Text Line:',
            text: ' Text "NEDA" to 741741',
            description:
              '24/7 crisis support for those in need of immediate help related to eating disorders.',
          },
          {
            name: 'The Emily Program:',
            phone: ' 1-888-364-5977',
            description: 'Provides specialized treatment for individuals with eating disorders.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'Beat Eating Disorders Helpline:',
          },
          {
            name: 'Adults:',
            phone: ' 0808 801 0677',
          },
          {
            name: 'Youth:',
            phone: ' 0808 801 0711',
          },
          {
            name: 'Studentline:',
            phone: ' 0808 801 0811',
          },
          {
            description:
              'Beat offers support via phone, web chat, and email for those affected by eating disorders. Visit',
            link2: ' beateatingdisorders.org.uk',
            url2: 'https://www.beateatingdisorders.org.uk',
            linkDes2: ' for more resources and online support groups.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'National Eating Disorder Information Centre (NEDIC):',
            phone: ' 1-866-633-4220',
            description:
              'Provides information and support for individuals experiencing eating disorders. You can also chat online at',
            link2: ' nedic.ca',
            url2: 'https://www.nedic.ca',
            linkDes2: '.',
          },
          {
            name: 'Looking Glass Foundation for Eating Disorders:',
            phone: ' 1-604-314-0548',
            description:
              'Offers support programs and an online community for those affected by eating disorders.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: 'The Butterfly Foundation National Helpline:',
            phone: ' 1800 33 4673',
            description:
              'Offers support via phone, web chat, and email for individuals experiencing eating disorders. You can also visit',
            link2: ' thebutterflyfoundation.org.au',
            url2: 'https://butterfly.org.au',
            linkDes2: '.',
          },
          {
            name: 'Eating Disorders Victoria:',
            phone: ' 1300 550 236',
            description:
              'Provides information, guidance, and support for those affected by eating disorders.',
          },
        ],
      },
      {
        country: 'Other International Resources',
        services: [
          {
            name: 'Project HEAL:',
            link1: ' theprojectheal.org',
            url1: 'https://www.theprojectheal.org',
            description:
              'Offers access to eating disorder treatment and resources for people who may not be able to afford care.',
          },
          {
            name: 'ANAD (National Association of Anorexia Nervosa and Associated Disorders):',
            link1: ' anad.org',
            url1: 'https://anad.org',
            description:
              'Offers free, peer-led support groups and mentoring for individuals with eating disorders.',
          },
        ],
      },
      {
        country: 'For Family and Friends',
        services: [
          {
            name: 'FEAST (Families Empowered and Supporting Treatment of Eating Disorders):',
            link1: ' feast-ed.org',
            url1: 'https://www.feast-ed.org',
            description:
              'Offers resources, forums, and support for families and caregivers of those with eating disorders.',
          },
          {
            name: 'Al-Anon (for families dealing with addiction co-occurring with eating disorders):',
            link1: ' www.al-anon.org',
            url1: 'https://www.al-anon.org',
          },
        ],
      },
    ],
  },
  {
    title: 'Post-Traumatic Stress',
    description: '',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'Top 10 Treatment Center for PTSD in US:',
            link1: ' newsmax.com',
            url1: 'https://www.newsmax.com/fastfeatures/post-traumatic-stress-disorder-treatment-centers/2017/11/08/id/370857/',
          },
          {
            name: 'National Center for PTSD (VA):',
            link1: ' www.ptsd.va.gov',
            url1: 'https://www.ptsd.va.gov',
            description:
              'Provides a "Find a Therapist" tool to locate mental health professionals specializing in PTSD, particularly for veterans, but also civilians.',
          },
          {
            name: 'Psychology Today PTSD Treatment Directory:',
            link1: ' www.psychologytoday.com/us/therapists/ptsd',
            url1: 'https://www.psychologytoday.com/us/therapists/ptsd',
            description:
              'Search for licensed therapists specializing in PTSD treatment by location and insurance.',
          },
          {
            name: 'International Society for Traumatic Stress Studies (ISTSS):',
            link1: ' www.istss.org',
            url1: 'https://www.istss.org',
            description:
              'Offers a directory to find trauma-focused therapists and PTSD treatment providers globally.',
          },
          {
            name: 'Veterans Affairs (VA) PTSD Program:',
            phone: ' 1-877-222-8387',
            description:
              'Offers specialized PTSD care for veterans at VA Medical Centers nationwide.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'NHS PTSD Services:',
            link1: ' www.nhs.uk',
            url1: 'https://www.nhs.uk/conditions/post-traumatic-stress-disorder-ptsd/treatment/',
            description:
              'The NHS offers free mental health services, including PTSD treatment, through GPs or specialized services like IAPT (Improving Access to Psychological Therapies).',
          },
          {
            name: 'Trauma Therapy UK:',
            link1: ' www.traumatherapy.org',
            url1: 'https://www.traumatherapy.org',
            description:
              'A network of therapists specializing in trauma and PTSD therapy across the UK.',
          },
          {
            name: 'Mind (UK):',
            link1: ' www.mind.org.uk',
            url1: 'https://www.mind.org.uk',
            description: 'Provides information and referrals for PTSD treatment services.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'Canadian Mental Health Association (CMHA):',
            link1: ' www.cmha.ca',
            url1: 'https://www.cmha.ca',
            description: 'Offers resources and referrals for finding PTSD treatment across Canada.',
          },
          {
            name: 'PTSD Association of Canada:',
            link1: ' www.ptsdassociation.com',
            url1: 'https://www.ptsdassociation.com',
            description:
              'Provides information, support, and resources for PTSD treatment and finding therapists.',
          },
          {
            name: 'Veterans Affairs Canada:',
            link1: ' www.veterans.gc.ca',
            url1: 'https://www.veterans.gc.ca/eng/services/health/mental-health/ptsd',
            description: 'Offers PTSD treatment programs for Canadian veterans.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: 'Phoenix Australia - Centre for Posttraumatic Mental Health:',
            link1: ' www.phoenixaustralia.org',
            url1: 'https://www.phoenixaustralia.org',
            description:
              'Provides a list of treatment providers and resources for those suffering from PTSD, including veterans and first responders.',
          },
          {
            name: 'Open Arms - Veterans & Families Counselling:',
            link1: ' www.openarms.gov.au',
            url1: 'https://www.openarms.gov.au',
            description: 'Free PTSD support for Australian veterans and their families.',
          },
          {
            name: 'Beyond Blue:',
            link1: ' www.beyondblue.org.au',
            url1: 'https://www.beyondblue.org.au/get-support/find-a-professional',
            description: 'Provides mental health professionals specializing in PTSD treatment.',
          },
        ],
      },
      {
        country: 'International/Online PTSD Therapy',
        services: [
          {
            name: 'BetterHelp:',
            link1: ' www.betterhelp.com',
            url1: 'https://www.betterhelp.com',
            description:
              'Online therapy platform offering licensed therapists, many of whom specialize in PTSD treatment.',
          },
          {
            name: 'Talkspace:',
            link1: ' www.talkspace.com',
            url1: 'https://www.talkspace.com',
            description:
              'Connects users with licensed therapists specializing in trauma and PTSD through online sessions.',
          },
          {
            name: 'Therapy Route:',
            link1: ' www.therapyroute.com',
            url1: 'https://www.therapyroute.com',
            description: 'A global directory for finding trauma and PTSD-focused therapists.',
          },
        ],
      },
      {
        country: 'Specialized PTSD Programs for Veterans and First Responders',
        services: [
          {
            name: 'Wounded Warrior Project:',
            link1: ' www.woundedwarriorproject.org',
            url1: 'https://www.woundedwarriorproject.org',
            description:
              'Provides PTSD treatment programs and support for veterans and active military personnel.',
          },
          {
            name: 'The PTSD Foundation of America:',
            link1: ' www.ptsdusa.org',
            url1: 'https://www.ptsdusa.org',
            description:
              'Offers residential treatment and community programs for veterans suffering from PTSD.',
          },
          {
            name: 'Code Green Campaign (First Responders):',
            link1: ' www.codegreencampaign.org',
            url1: 'http://www.codegreencampaign.org',
            description:
              'A support organization for first responders offering PTSD resources and crisis help.',
          },
        ],
      },
      {
        country: 'Evidence-Based Therapies for PTSD',
        services: [
          {
            description:
              "When seeking treatment for PTSD, it's important to ensure that the provider is trained in evidence-based therapies, such as:",
          },
          {
            name: 'Cognitive Behavioral Therapy (CBT)',
          },
          {
            name: 'Prolonged Exposure Therapy (PE)',
          },
          {
            name: 'Eye Movement Desensitization and Reprocessing (EMDR)',
          },
          {
            name: 'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
          },
          {
            description:
              'These treatments are considered effective for PTSD, and finding a provider with expertise in these methods is crucial for recovery.',
          },
          {
            name: "If you're in immediate crisis due to PTSD, reaching out to a mental health or suicide hotline (such as the Veterans Crisis Line in the U.S. at ",
            phone: '1-800-273-8255',
            text: ', Press 1) is essential.',
          },
        ],
      },
    ],
  },
  {
    title: 'Find a Counselor',
    description: '',
    helpList: [
      {
        country: 'United States',
        services: [
          {
            name: 'Psychology Today Therapist Directory:',
            link1: ' www.psychologytoday.com/us/therapists',
            url1: 'https://www.psychologytoday.com/us/therapists',
            description:
              'Search for licensed therapists and counselors by location, specialty, insurance, and more.',
          },
          {
            name: 'SAMHSA Treatment Locator:',
            link1: ' findtreatment.samhsa.gov',
            url1: 'https://findtreatment.samhsa.gov',
            description:
              "Find mental health and substance abuse counseling through the Substance Abuse and Mental Health Services Administration's locator.",
          },
          {
            name: 'GoodTherapy:',
            link1: ' www.goodtherapy.org',
            url1: 'https://www.goodtherapy.org',
            description: 'A directory of therapists across the U.S. with various specialties.',
          },
          {
            name: 'BetterHelp:',
            link1: ' www.betterhelp.com',
            url1: 'https://www.betterhelp.com',
            description:
              'Offers online therapy and counseling sessions with licensed professionals.',
          },
        ],
      },
      {
        country: 'United Kingdom',
        services: [
          {
            name: 'BACP (British Association for Counselling and Psychotherapy):',
            link1: ' www.bacp.co.uk',
            url1: 'https://www.bacp.co.uk',
            description: 'Search for accredited counselors and psychotherapists in the UK.',
          },
          {
            name: 'Counselling Directory:',
            link1: ' www.counselling-directory.org.uk',
            url1: 'https://www.counselling-directory.org.uk',
            description:
              'A directory of professional counselors and therapists across the UK, searchable by issue, location, and service type.',
          },
          {
            name: 'Mind:',
            link1: ' www.mind.org.uk',
            url1: 'https://www.mind.org.uk/information-support/drugs-and-treatments/talking-therapy-and-counselling',
            description:
              'Provides mental health information and local resources, including where to find counseling services.',
          },
        ],
      },
      {
        country: 'Canada',
        services: [
          {
            name: 'Canadian Counselling and Psychotherapy Association (CCPA):',
            link1: ' www.ccpa-accp.ca',
            url1: 'https://www.ccpa-accp.ca',
            description:
              'Offers a "Find a Canadian Certified Counselor" directory to help connect you with licensed counselors across Canada.',
          },
          {
            name: 'Therapy Route:',
            link1: ' www.therapyroute.com',
            url1: 'https://www.therapyroute.com',
            description: 'A directory for finding therapists and counselors in Canada.',
          },
          {
            name: 'eMentalHealth.ca:',
            link1: ' www.ementalhealth.ca',
            url1: 'https://www.ementalhealth.ca',
            description:
              'Provides resources for finding local mental health services, including counseling and therapy, in Canada.',
          },
        ],
      },
      {
        country: 'Australia',
        services: [
          {
            name: 'Australian Psychological Society (APS) Find a Psychologist:',
            link1: ' www.psychology.org.au',
            url1: 'https://www.psychology.org.au/Find-a-Psychologist',
            description: 'A comprehensive directory of registered psychologists across Australia.',
          },
          {
            name: 'Better Access Initiative (via GP referral):',
            text: ' Speak with your GP for a referral to counseling or therapy services that may be subsidized through Medicare.',
          },
          {
            name: 'Beyond Blue:',
            link1: ' www.beyondblue.org.au',
            url1: 'https://www.beyondblue.org.au/get-support/find-a-professional',
            description:
              'Offers a search tool for finding mental health professionals and provides resources for mental health support.',
          },
        ],
      },
      {
        country: 'International/Online Therapy Resources',
        services: [
          {
            name: 'Talkspace:',
            link1: ' www.talkspace.com',
            url1: 'https://www.talkspace.com',
            description:
              'Online therapy service offering access to licensed therapists via text, video, and voice messaging.',
          },
          {
            name: 'Open Path Collective:',
            link1: ' www.openpathcollective.org',
            url1: 'https://openpathcollective.org',
            description:
              'Provides affordable in-person and online counseling services worldwide for individuals and families.',
          },
          {
            name: 'Theravive:',
            link1: ' www.theravive.com',
            url1: 'https://www.theravive.com',
            description:
              'A global directory of licensed counselors, psychologists, and therapists.',
          },
        ],
      },
      {
        country: 'For Specific Needs or Groups',
        services: [
          {
            name: 'Inclusive Therapists:',
            link1: ' www.inclusivetherapists.com',
            url1: 'https://www.inclusivetherapists.com',
            description:
              'Provides a directory of therapists who specialize in working with marginalized and underrepresented communities.',
          },
          {
            name: 'Therapy for Latinx:',
            link1: ' www.therapyforlatinx.com',
            url1: 'https://www.therapyforlatinx.com',
            description: 'A directory of Latinx therapists offering culturally competent care.',
          },
          {
            name: 'The Trevor Project (LGBTQ Youth Support):',
            link1: ' www.thetrevorproject.org',
            url1: 'https://www.thetrevorproject.org',
            description: 'Provides mental health support and crisis intervention for LGBTQ youth.',
          },
        ],
      },
    ],
  },
];

// Export data and types
export { HELPLIST_GENERAL_CONTENTS };
export type { HelpListGeneralItem };
