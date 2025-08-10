// Define the type for description items
interface DescriptionItem {
  text1?: string;
  number1?: string;
  text2?: string;
  number2?: string;
  text3?: string;
}

interface HelpList {
  subtitle?: string;
  description: DescriptionItem[];
}

interface HelpListStatiticsItem {
  title: string;
  helpList: HelpList[];
}

// Define the helplist statitics contents
const HELPLIST_STATITICS_CONTENTS: HelpListStatiticsItem[] = [
  {
    title: 'Mental Illness',
    helpList: [
      {
        subtitle: 'Prevalence of Any Mental Illness (AMI)',
        description: [
          {
            text1: 'Approximately',
            number1: ' 21%',
            text2: ' of U.S. adults (about',
            number2: ' 57.8 million people',
            text3: ') experienced mental illness in 2021.',
          },
          {
            text1: 'Mental illness is more common in females (25.8%) than males (15.8%).',
          },
          {
            text1: 'Around',
            number1: ' 5.5%',
            text2: ' of U.S. adults (about',
            number2: ' 14.1 million people',
            text3: ') experienced SMI in 2021. SMI causes significant functional impairment.',
          },
        ],
      },
    ],
  },
  {
    title: 'Anxiety Disorders',
    helpList: [
      {
        subtitle: 'Prevalence of Anxiety Disorders',
        description: [
          {
            text1: 'About',
            number1: ' 19.1%',
            text2: ' of U.S. adults had an anxiety disorder in the past year, affecting around',
            number2: ' 48 million people',
            text3: '.',
          },
          {
            text1: 'Anxiety disorders are more common in females (23.4%) than males (14.3%).',
          },
        ],
      },
    ],
  },
  {
    title: 'Depression',
    helpList: [
      {
        subtitle: 'Major Depressive Disorder (MDD)',
        description: [
          {
            number1: '8.4%',
            text2:
              ' of U.S. adults experienced at least one major depressive episode in 2021, affecting about',
            number2: ' 21 million people',
            text3: '.',
          },
          {
            text1: 'Among adolescents (ages 12-17),',
            number1: ' 15.7%',
            text2: ' experienced a major depressive episode in the past year.',
          },
          {
            text1: 'Depression is more common in females (10.5%) compared to males (6.2%)',
          },
        ],
      },
    ],
  },
  {
    title: 'Insomnia',
    helpList: [
      {
        subtitle: 'Prevalence of Chronic Insomnia',
        description: [
          {
            text1: 'Chronic insomnia affects approximately',
            number1: ' 10-15%',
            text2: ' of U.S. adults.',
          },
          {
            text1: 'Short-term insomnia affects',
            number1: ' 30-35%',
            text2: ' of people at some point in their lives.',
          },
        ],
      },
    ],
  },
  {
    title: 'Panic Disorder',
    helpList: [
      {
        subtitle: 'Prevalence of Panic Disorder',
        description: [
          {
            text1: 'About',
            number1: ' 2-3%',
            text2: ' of U.S. adults experience panic disorder, affecting around',
            number2: ' 4.8 million people',
            text3: '.',
          },
        ],
      },
    ],
  },
  {
    title: 'Eating Disorders',
    helpList: [
      {
        description: [
          {
            text1: 'Approximately',
            number1: ' 28.8 million Americans',
            text2: ' (about',
            number2: ' 9%',
            text3:
              ' of the population) will have an eating disorder at some point in their lifetime.',
          },
          {
            text1:
              'Eating disorders are particularly prevalent among young women and have high mortality rates among psychiatric disorders.',
          },
        ],
      },
    ],
  },
  {
    title: 'Alcohol Use Disorder (Alcoholism)',
    helpList: [
      {
        description: [
          {
            text1: 'About',
            number1: ' 13.9 million',
            text2: ' adults aged 18 or older in the U.S. (approximately',
            number2: ' 5.3%',
            text3: ') had AUD in 2021.',
          },
          {
            text1: "It's more common in men (7.6%) than women (3.1%).",
          },
        ],
      },
    ],
  },
  {
    title: 'Substance Use Disorder (Addiction)',
    helpList: [
      {
        description: [
          {
            text1: 'Approximately',
            number1: ' 46.3 million people',
            text2: ' aged 12 or older (about',
            number2: ' 16.5%',
            text3: ' of the population) had a substance use disorder in 2021.',
          },
          {
            text1: 'Opioid Use Disorder affected about',
            number1: ' 2.7 million people',
            text2: ' in 2021.',
          },
          {
            text1: 'About',
            number1: ' 19.4%',
            text2: ' of the population (aged 12 or older) had used illicit drugs in the past year.',
          },
        ],
      },
    ],
  },
  {
    title: 'Suicide Rates',
    helpList: [
      {
        description: [
          {
            text1: 'About',
            number1: ' 14',
            text2: ' per',
            number2: ' 100,000',
            text3: ' people died of suicide in the U.S. in 2022.',
          },
          {
            text1: 'Suicide is the',
            number1: ' 11th',
            text2: '  leading cause of death in the U.S.',
          },
          {
            text1: 'Suicide rates are rising, highlighting the need for mental health awareness.',
          },
        ],
      },
    ],
  },
  {
    title: 'Post-Traumatic Stress Disorder (PTSD)',
    helpList: [
      {
        subtitle: 'Prevalence of PTSD',
        description: [
          {
            text1: 'About',
            number1: ' 6%',
            text2: ' of U.S. adults will experience PTSD at some point in their lives.',
          },
          {
            text1: 'In any given year, approximately',
            number1: ' 3.6%',
            text2: ' of U.S. adults (about',
            number2: ' 9 million people',
            text3: ') have PTSD.',
          },
          {
            text1:
              'PTSD is more prevalent among women (9.7%) compared to men (3.6%), largely due to higher rates of trauma, such as sexual violence.',
          },
        ],
      },
    ],
  },
  // {
  //   title: 'Social Anxiety Disorder (Social Phobia)',
  //   helpList: [
  //     {
  //       description: [
  //         {
  //           text1: 'Approximately',
  //           number1: ' 12.1%',
  //           text2:
  //             ' of U.S. adults experience social anxiety disorder at some point in their lives.',
  //         },
  //         {
  //           text1: 'In a given year, about',
  //           number1: ' 7.1%',
  //           text2: ' of U.S. adults (around',
  //           number2: ' 17 million people',
  //           text3: ') have social anxiety disorder.',
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Export data and types
export { HELPLIST_STATITICS_CONTENTS };
export type { HelpListStatiticsItem };
