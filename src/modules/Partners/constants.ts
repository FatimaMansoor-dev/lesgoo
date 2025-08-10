import { assetVersion, imageDomainUrl } from 'shared/constants/Assets';

export const PARTNERS_IMAGES = {
  'h-card-1': {
    url: `${imageDomainUrl}/Partners/h-card-1.png?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-2': {
    url: `${imageDomainUrl}/Partners/h-card-2.png?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-3': {
    url: `${imageDomainUrl}/Partners/h-card-3.png?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-4': {
    url: `${imageDomainUrl}/Partners/h-card-4.png?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-5': {
    url: `${imageDomainUrl}/Partners/h-card-5.png?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'wellness-1': {
    url: `${imageDomainUrl}/Partners/wellness-lifestyle.jpg?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-2': {
    url: `${imageDomainUrl}/Partners/wellness-hospitality.jpg?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-3': {
    url: `${imageDomainUrl}/Partners/wellness-employees.jpg?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-4': {
    url: `${imageDomainUrl}/Partners/wellness-responders.jpg?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-5': {
    url: `${imageDomainUrl}/Partners/wellness-students.jpg?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
};

export const WELLNESS = [
  {
    title: 'Wellness for',
    subtitle: 'Lifestyle',
    description: `We delight in collaborating with lifestyle brands to amplify life balance benefits and rewards for customers. Experience the added joy of mindfulness, motivation, and relaxation as you indulge in your favorite popular brand products.`,
    image: PARTNERS_IMAGES['wellness-1'],
    bgColor: 'rgba(179, 141, 178, 0.5)',
  },
  {
    title: 'Wellness for',
    subtitle: 'Hospitality',
    description: `We foster a positive connection between consumers and our curated group of popular hospitality brand partners. Soulscape serves as a pocket travel companion, ensuring a balanced and harmonious journey.`,
    image: PARTNERS_IMAGES['wellness-2'],
    bgColor: '#C0D3B3',
  },
  {
    title: 'Wellness for',
    subtitle: 'Employees',
    description: `Elevating employee happiness translates to increased customer satisfaction. Our suite of skillful thinking and skillful living is committed to fostering corporate health and wellness. The pocket guide promotes mental health awareness and equips individuals with tools to enhance focus, motivation, and productivity.`,
    image: PARTNERS_IMAGES['wellness-3'],
    bgColor: '#E6F9FA',
  },
  {
    title: 'Wellness for',
    subtitle: 'Responders',
    description: `We are committed to supporting those on the front lines – health care workers, law enforcement, dispatch, fire service, EMS, veterans, and military personnel. Our mission is to reduce stress and foster greater health, wellness, and life balance for these courageous individuals.`,
    image: PARTNERS_IMAGES['wellness-4'],
    bgColor: '#A9CFEC',
  },
  {
    title: 'Wellness for',
    subtitle: 'Students',
    description: `Collaborating with university partners, we guide future leaders in enhancing mental health. Through positive psychology, mindfulness, and motivation, our aim is to reduce stress, navigate life's challenges, fortify memory, boost productivity, and inspire unwavering confidence.`,
    image: PARTNERS_IMAGES['wellness-5'],
    bgColor: '#D9C6D9',
  },
];
