import { AudioPlayer } from './AudioPlayer';

export const AudioPlayerDemo = () => {
  const sampleItem = {
    premium: false,
    preview: null,
    title: 'Sample Audio Track',
    album: {
      title: 'Sample Album',
    },
  };

  const sampleSrc = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';

  return (
    <div className="space-y-8 p-8 bg-gray-900 min-h-screen">
      <h1 className="text-white text-2xl font-bold mb-8">Audio Player Styles Demo</h1>

      {/* Default Style */}
      <div>
        <h2 className="text-white text-lg mb-4">Default Style</h2>
        <AudioPlayer
          src={sampleSrc}
          item={sampleItem}
          styleType="default"
          subscriptionStatus="active"
        />
      </div>

      {/* Slider Style */}
      <div>
        <h2 className="text-white text-lg mb-4">Slider Style</h2>
        <AudioPlayer
          src={sampleSrc}
          item={sampleItem}
          styleType="slider"
          subscriptionStatus="active"
        />
      </div>

      {/* Minimal Style */}
      <div>
        <h2 className="text-white text-lg mb-4">Minimal Style</h2>
        <AudioPlayer
          src={sampleSrc}
          item={sampleItem}
          styleType="minimal"
          subscriptionStatus="active"
        />
      </div>

      {/* Locked State Example */}
      <div>
        <h2 className="text-white text-lg mb-4">Locked State (Premium Content)</h2>
        <AudioPlayer
          src={sampleSrc}
          item={{
            ...sampleItem,
            premium: true,
          }}
          styleType="default"
          subscriptionStatus="inactive"
        />
      </div>
    </div>
  );
};

export default AudioPlayerDemo;
