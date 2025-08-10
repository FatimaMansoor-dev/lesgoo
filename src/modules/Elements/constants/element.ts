import { imageDomainUrl } from 'shared/constants/Assets';

// Define the type for elements items
interface ElementsItem {
  bgcolor: string;
  hoverColor: string;
  textcolor: string;
  title: string;
  element: string;
  img1: string;
  img2: string;
}

// Define the elements contents
const ELEMENTS_DATA: ElementsItem[] = [
  {
    bgcolor: 'bg-[#9AC17E]',
    hoverColor: '#89b46b',
    textcolor: 'text-[#9AC17E]',
    title: 'Mindful Relaxers',
    element: 'earth',
    img1: `${imageDomainUrl}/Elements/Icon/earth.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/earth-shape.svg`,
  },
  {
    bgcolor: 'bg-[#F07E59]',
    hoverColor: '#df714c',
    textcolor: 'text-[#F07E59]',
    title: 'Active Energizers',
    element: 'fire',
    img1: `${imageDomainUrl}/Elements/Icon/fire.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/fire-shape.svg`,
  },
  {
    bgcolor: 'bg-[#B38DB2]',
    hoverColor: '#ab80aa',
    textcolor: 'text-[#B38DB2]',
    title: 'Rejuvenation Relaxers',
    element: 'space',
    img1: `${imageDomainUrl}/Elements/Icon/space.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/space-shape.svg`,
  },
  {
    bgcolor: 'bg-[#D96D99]',
    hoverColor: '#c45b88',
    textcolor: 'text-[#D96D99]',
    title: 'Social Connectors',
    element: 'social',
    img1: `${imageDomainUrl}/Elements/Icon/social.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/social-shape.svg`,
  },
  {
    bgcolor: 'bg-[#539ED9]',
    hoverColor: '#4b90c4',
    textcolor: 'text-[#539ED9]',
    title: 'Creative Expressors',
    element: 'wind',
    img1: `${imageDomainUrl}/Elements/Icon/wind.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/wind-shape.svg`,
  },
  {
    bgcolor: 'bg-[#00C0C5]',
    hoverColor: '#35a3a7',
    textcolor: 'text-[#00C0C5]',
    title: 'Self-Love Activators',
    element: 'water',
    img1: `${imageDomainUrl}/Elements/Icon/water.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/water-shape.svg`,
  },
];

// Export elements data
export { ELEMENTS_DATA };
