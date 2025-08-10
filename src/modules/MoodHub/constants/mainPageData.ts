interface MainPageItem {
  slug: string;
  title: string;
  description: string;
}

// Define the helplist general contents
const MAIN_PAGE_CONTENTS: MainPageItem[] = [
  {
    slug: 'weather-and-seasons',
    title: 'Weather and seasons',
    description: 'Some people experience mood changes related to seasonal shifts or weather.',
  },
  {
    slug: 'work-environment',
    title: 'Work environment',
    description: 'Job satisfaction and workplace stress can affect overall mood.',
  },
  {
    slug: 'financial-situation',
    title: 'Financial situation',
    description: 'Economic stress or stability can influence mental well-being',
  },
  {
    slug: 'health-conditions',
    title: 'Health conditions',
    description: 'Chronic illnesses or pain can impact mood states',
  },
  {
    slug: 'substance-use',
    title: 'Substance use',
    description: 'Alcohol, drugs, and even caffeine can affect mood short-term and long-term.',
  },
];

// Export data and types
export { MAIN_PAGE_CONTENTS };
export type { MainPageItem };
