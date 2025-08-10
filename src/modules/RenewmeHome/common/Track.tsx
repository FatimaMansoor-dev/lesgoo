import { AudioPlayer } from './AudioPlayer';

interface TrackProps {
  item: {
    premium: boolean;
    preview: string | null;
    title: string | null;
    album: {
      title: string | null;
    };
    url?: string;
  };
  needControls?: boolean;
  needVolumes?: boolean;
  classNames?: string;
  subscriptionStatus?: string;
  onLock?: () => void;
}

const Track = ({
  item,
  needControls = true,
  needVolumes = true,
  classNames = 'default',
  subscriptionStatus = '',
  onLock,
}: TrackProps) => {
  return (
    <AudioPlayer
      src={item?.url || ''}
      item={item}
      needControls={needControls}
      needVolumes={needVolumes}
      classNames={classNames}
      subscriptionStatus={subscriptionStatus}
      onLock={onLock}
    />
  );
};

export default Track;
