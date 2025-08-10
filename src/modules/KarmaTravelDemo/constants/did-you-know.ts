interface DidYouKnowItem {
  category: string;
  fact: string;
  color: string;
  textColor: string;
  hexColor: string;
}

const CATEGORY_COLORS: Record<string, { color: string; textColor: string; hexColor: string }> = {
  'Trivia Point': {
    color: 'bg-[linear-gradient(131.9deg,_#132979_12.5%,rgba(19,41,121,0.8)97.71%)]',
    textColor: 'text-[#132979]',
    hexColor: '#132979',
  },
  'Cool Tidbit': {
    color: 'bg-[#9AC17E]',
    textColor: 'text-[#9AC17E]',
    hexColor: '#9AC17E',
  },
  'Fun Fact': {
    color: 'bg-[#B38DB2]',
    textColor: 'text-[#B38DB2]',
    hexColor: '#B38DB2',
  },
};

const RAW_DID_YOU_KNOW_ITEMS: Omit<DidYouKnowItem, 'color' | 'textColor' | 'hexColor'>[] = [
  {
    category: 'Trivia Point',
    fact: 'The neurotransmitter serotonin is often referred to as the "feel-good" chemical because it contributes to feelings of well-being and happiness.',
  },
  {
    category: 'Trivia Point',
    fact: 'The mineral Magnesium is important for muscle contraction and bone health. It also helps promote relaxation.',
  },
  {
    category: 'Cool Tidbit',
    fact: 'Probiotics are live beneficial bacteria that help maintain a healthy gut microbiome, and gut health is connected to brain health.',
  },
  {
    category: 'Fun Fact',
    fact: 'Antioxidants protect cells from damage caused by free radicals.',
  },
  {
    category: 'Fun Fact',
    fact: `The glycemic index measures how quickly foods raise blood sugar levels; it's important for managing diabetes and maintaining stable energy levels.`,
  },
  {
    category: 'Cool Tidbit',
    fact: `Chronic stress can weaken the immune system, making the body more susceptible to infections and diseases.`,
  },
  {
    category: 'Fun Fact',
    fact: `A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats support brain health and help reduce effects of stress.`,
  },
  {
    category: 'Trivia Point',
    fact: `Vitamin B6 can help reduce symptoms of anxiety and depression.`,
  },
  {
    category: 'Cool Tidbit',
    fact: `Journaling and meditation can help manage stress and enhance mental well-being.`,
  },
  {
    category: 'Fun Fact',
    fact: `Laughter reduces stress levels and improves brain health by triggering the release of endorphins and promoting a positive mood.`,
  },
  {
    category: 'Trivia Point',
    fact: `The amygdala is the part of the brain primarily responsible for regulating emotions and stress.`,
  },
  {
    category: 'Cool Tidbit',
    fact: `Water is essential for hydration, digestion, temperature regulation, and overall bodily functions.`,
  },
];

const reorderItems = (items: Omit<DidYouKnowItem, 'color' | 'textColor' | 'hexColor'>[]) => {
  const order = ['Trivia Point', 'Cool Tidbit', 'Fun Fact'];
  let index = 0;

  return items.map(item => {
    const category = order[index % order.length];
    index++;
    return {
      ...item,
      category,
    };
  });
};

const REORDERED_RAW_ITEMS = reorderItems(RAW_DID_YOU_KNOW_ITEMS);

const DID_YOU_KNOW_ITEMS: DidYouKnowItem[] = REORDERED_RAW_ITEMS.map(item => ({
  ...item,
  ...CATEGORY_COLORS[item.category],
}));

export { DID_YOU_KNOW_ITEMS };
export type { DidYouKnowItem };
