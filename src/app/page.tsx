"use client";

import Image from "next/image";
import { useState } from "react";
import { stations } from "@/lib/radio";
import SpotifyPlayer from "./SpotifyPlayer";

export default function Home() {
  const [stationIndex, setStationIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [powered, setPowered] = useState(true);

  const station = stations[stationIndex];
  const tracks = station.playlist.tracks;
  const track = tracks[trackIndex];

  function selectStation(index: number) {
    setStationIndex(index);
    setTrackIndex(0);
  }

  function changeTrack(direction: number) {
    setTrackIndex(
      (current) => (current + direction + tracks.length) % tracks.length
    );
  }

  return (
    <main className="musafir">
      <Image
        key={station.image}
        src={station.image}
        alt=""
        fill
        priority
        className="scene"
      />

      <div className="sceneShade" />

      <header className="identity">
        <p className="eyebrow">India · Europe · California</p>
        <h1>MUSAFIR RADIO</h1>
        <p className="tagline">music collected along the way</p>
      </header>

      <nav className="smallNav">
        <button
          onClick={() =>
            document
              .getElementById("stationDial")
              ?.classList.toggle("stationDialOpen")
          }
        >
          Stations
        </button>

        <a href="#about">About</a>
      </nav>

      <section
        id="stationDial"
        className="stationDial"
        aria-label="Station selector"
      >
        {stations.map((item, index) => (
          <button
            key={item.id}
            className={
              index === stationIndex
                ? "dialItem active"
                : "dialItem"
            }
            onClick={() => selectStation(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.playlist.station}
          </button>
        ))}
      </section>

      <section
        className="radioInterface"
        aria-label="Radio controls"
      >
        <div className="nowPlaying">
          <p className="stationLabel">
            {station.playlist.station}
          </p>

          <h2>{track.title}</h2>

          <p className="trackArtist">
            {track.artist}
          </p>

          <div className="trackMeta">
            <span>
              {String(trackIndex + 1).padStart(2, "0")} /{" "}
              {String(tracks.length).padStart(2, "0")}
            </span>

            <span>{station.place}</span>
          </div>
        </div>

        <SpotifyPlayer
          spotifyId={track.spotify_id}
          title={`${track.title} — ${track.artist}`}
        />

        <div className="analogueControls">
          <button
            className="knob"
            onClick={() => changeTrack(-1)}
            aria-label="Previous track"
          >
            ‹
          </button>

          <button
            className={powered ? "power powered" : "power"}
            onClick={() => setPowered((value) => !value)}
            aria-label={powered ? "Turn radio off" : "Turn radio on"}
          >
            <span />
          </button>

          <button
            className="knob"
            onClick={() => changeTrack(1)}
            aria-label="Next track"
          >
            ›
          </button>
        </div>

        <div className="frequencyLine" aria-hidden="true">
          {tracks.map((item, index) => (
            <button
              key={`${station.id}-${item.position}`}
              className={
                index === trackIndex
                  ? "tick selected"
                  : "tick"
              }
              onClick={() => setTrackIndex(index)}
              tabIndex={-1}
            />
          ))}
        </div>
      </section>

      <p className="leavePlaying">
        something to leave playing while you work
      </p>
    </main>
  );
}
