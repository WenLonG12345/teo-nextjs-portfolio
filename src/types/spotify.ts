export type ISpotifySong =
  | {
      album?: string;
      albumImageUrl?: string;
      artist?: string;
      isPlaying: true;
      songUrl?: string;
      title?: string;
    }
  | { isPlaying: false };
