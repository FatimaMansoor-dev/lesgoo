import TravelTipsId from 'modules/TravelTips/components/TravelTipsId';
import { TRAVEL_TIPS } from 'modules/TravelTipsPage/constant/travel-tips';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface TravelTipsPageProps {
  id: string;
}

const TravelTipsPage: NextPage<TravelTipsPageProps> = ({ id }) => {
  return <TravelTipsId id={id} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = TRAVEL_TIPS.map(tip => ({
    params: { travelTipsId: tip.slug.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = context => {
  const travelTipsId = context.params?.travelTipsId as string;

  // Find the travel tip case-insensitively
  const travelTip = TRAVEL_TIPS.find(tip => tip.slug.toLowerCase() === travelTipsId.toLowerCase());

  // If no matching travel tip is found, return 404
  if (!travelTip) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: travelTipsId,
    },
  };
};

export default TravelTipsPage;
