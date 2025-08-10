export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : String(remainingSeconds);
  return `${minutes}:${formattedSeconds}`;
};
