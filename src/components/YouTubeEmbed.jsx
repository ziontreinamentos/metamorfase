import { useState } from "react";

export function getYouTubeThumb(videoId) {
  const override = typeof window !== "undefined" && window.__YT_THUMB_OVERRIDES__;
  if (override && override[videoId]) return override[videoId];
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export function YouTubePlayer({ videoId, className = "" }) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
      title="YouTube video player"
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export function useYouTubePlay() {
  const [playing, setPlaying] = useState(false);
  return { playing, play: () => setPlaying(true) };
}
