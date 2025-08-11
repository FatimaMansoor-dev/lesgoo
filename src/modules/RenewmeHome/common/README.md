# AudioPlayer Component

The AudioPlayer component has been updated to support multiple predefined styles and improved customization options.

## Features

- **Multiple Style Presets**: Choose from `default`, `slider`, or `minimal` styles
- **Dynamic Icon Rendering**: Icons adapt based on the selected style
- **Responsive Design**: All styles are responsive and work on different screen sizes
- **Lock State**: Support for premium content with lock icon
- **Volume Controls**: Integrated volume controls (optional)
- **Progress Tracking**: Visual progress bar with time display

## Available Styles

### 1. Default Style (`styleType="default"`)

- Larger buttons and text
- Includes progress bar with time display
- Full feature set with volume controls
- Glass-like background with backdrop blur

### 2. Slider Style (`styleType="slider"`)

- Compact design with lucide icons
- Clean, modern appearance
- Rounded corners and subtle styling

### 3. Minimal Style (`styleType="minimal"`)

- Smallest footprint
- Essential controls only
- Perfect for sidebar or compact layouts

## Usage

```tsx
import { AudioPlayer } from './AudioPlayer';

// Basic usage with default style
<AudioPlayer
  src="audio-file-url.mp3"
  item={{
    premium: false,
    preview: null,
    title: "Track Title",
    album: { title: "Album Name" }
  }}
  subscriptionStatus="active"
/>

// Using different styles
<AudioPlayer
  src="audio-file-url.mp3"
  item={audioItem}
  styleType="slider"
  subscriptionStatus="active"
/>

<AudioPlayer
  src="audio-file-url.mp3"
  item={audioItem}
  styleType="minimal"
  subscriptionStatus="active"
/>

// Locked content (premium)
<AudioPlayer
  src="audio-file-url.mp3"
  item={{
    premium: true,
    preview: null,
    title: "Premium Track",
    album: { title: "Premium Album" }
  }}
  styleType="default"
  subscriptionStatus="inactive"
  onLock={() => console.log('Show subscription prompt')}
/>
```

## Props

| Prop                 | Type                                 | Default     | Description                |
| -------------------- | ------------------------------------ | ----------- | -------------------------- |
| `styleType`          | `'default' \| 'slider' \| 'minimal'` | `'default'` | Visual style preset        |
| `src`                | `string`                             | -           | Audio file URL (required)  |
| `item`               | `AudioItem`                          | -           | Track information object   |
| `subscriptionStatus` | `string`                             | `''`        | User's subscription status |
| `autoPlay`           | `boolean`                            | `false`     | Auto-play the audio        |
| `loop`               | `boolean`                            | `false`     | Loop the audio             |
| `volume`             | `number`                             | `1`         | Initial volume (0-100)     |
| `needControls`       | `boolean`                            | `true`      | Show progress controls     |
| `needVolumes`        | `boolean`                            | `true`      | Show volume controls       |
| `onPlay`             | `() => void`                         | -           | Play event callback        |
| `onPause`            | `() => void`                         | -           | Pause event callback       |
| `onEnd`              | `() => void`                         | -           | End event callback         |
| `onLock`             | `() => void`                         | -           | Lock click callback        |
| `onError`            | `(event, message) => void`           | -           | Error event callback       |

## Customizing Styles

The styles are defined in `src/modules/RenewmeHome/common/audio-player/helpers/styles/audio.ts`. You can:

1. **Modify existing styles**: Edit the classes in `defaultClass`, `sliderClass`, or `minimal`
2. **Add new styles**: Create new style objects and update the component logic
3. **Override with custom CSS**: Use the `className` prop to apply additional styles

### Style Structure

Each style object contains:

- `rapContainer`: Main container and layout classes
- `rapPpButton`: Play/pause/lock button styles and SVG configurations
- `rapTexts`: Typography classes for title and album text

### Example: Adding a Custom Style

1. Add your style to `audio.ts`:

```typescript
export const customStyle = {
  rapContainer: {
    main: 'your-custom-classes',
    main2: 'your-layout-classes',
  },
  rapPpButton: {
    main: 'your-button-classes',
    play: {
      /* SVG config */
    },
    pause: {
      /* SVG config */
    },
    lock: {
      /* SVG config */
    },
  },
  rapTexts: {
    album: 'your-title-classes',
    title: 'your-subtitle-classes',
  },
};
```

2. Update the interface to include your new style type
3. Add the logic to `getCurrentStyles()` function

## Notes

- The component uses Tailwind CSS classes for styling
- SVG icons are configured per style and automatically rendered
- Progress bars and volume controls maintain consistent behavior across all styles
- The component is fully accessible with keyboard controls
