type MoveEvents = 'mousemove' | 'touchmove';
type UpEvents = 'mouseup' | 'touchend';

interface DeviceEventNames {
  move: MoveEvents;
  up: UpEvents;
}

const getDeviceEventNames = (): DeviceEventNames => {
  const isTouchDevice = 'ontouchstart' in window;
  return {
    move: isTouchDevice ? 'touchmove' : 'mousemove',
    up: isTouchDevice ? 'touchend' : 'mouseup',
  };
};

export default getDeviceEventNames;
