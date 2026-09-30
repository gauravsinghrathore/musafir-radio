"use client";

type SpotifyPlayerProps = {
  spotifyId?: string;
  title: string;
};

export default function SpotifyPlayer({
  spotifyId,
  title,
}: SpotifyPlayerProps) {
  if (!spotifyId) {
    return null;
  }

  return (
    <div className="spotifyPlayer">
      <iframe
        src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator`}
        title={`${title} — Spotify`}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
