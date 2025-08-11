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
  styleType?: 'default' | 'slider' | 'minimal';
  subscriptionStatus?: string;
  onLock?: () => void;
}

const Track = ({
  item,
  needControls = true,
  needVolumes = true,
  classNames = 'default',
  styleType = 'default',
  subscriptionStatus = '',
  onLock,
}: TrackProps) => {
  return (
    <AudioPlayer
      src={item?.url || ''}
      item={item}
      styleType={styleType}
      needControls={needControls}
      needVolumes={needVolumes}
      classNames={classNames}
      subscriptionStatus={subscriptionStatus}
      onLock={onLock}
    />
  );
};

export default Track;
