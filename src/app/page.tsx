"use client";

import Image from "next/image";
import { useState } from "react";

const stations = [
  {
    id: "sunday-morning",
    name: "Sunday Morning",
    place: "India",
    image: "/concepts/01_sunday_morning.png",
  },
  {
    id: "nai-ki-dukaan",
    name: "Nai Ki Dukaan",
    place: "India · 90s",
    image: "/concepts/02_nai_ki_dukaan.png",
  },
  {
    id: "highway-dhaba",
    name: "Highway Dhaba",
    place: "India · On the road",
    image: "/concepts/03_highway_dhaba.png",
  },
  {
    id: "continental-breakfast",
    name: "Continental Breakfast",
    place: "Europe",
    image: "/concepts/04_continental_breakfast.png",
  },
  {
    id: "california-radio",
    name: "California Radio",
    place: "California",
    image: "/concepts/05_california_radio.png",
  },
  {
    id: "wander",
    name: "Wander",
    place: "Everywhere",
    image: "/concepts/06_wander.png",
  },
];

export default function Home() {
  const [stationIndex, setStationIndex] = useState(0);
  const [powered, setPowered] = useState(true);

  const station = stations[stationIndex];

  function tune(direction: number) {
    setStationIndex(
      (current) =>
        (current + direction + stations.length) % stations.length
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
            className={index === stationIndex ? "dialItem active" : "dialItem"}
            onClick={() => setStationIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.name}
          </button>
        ))}
      </section>

      <section className="radioInterface" aria-label="Radio controls">
        <div className="nowPlaying">
          <p className="stationNumber">
            {String(stationIndex + 1).padStart(2, "0")} / 06
          </p>

          <h2>{station.name}</h2>
          <p className="stationPlace">{station.place}</p>
        </div>

        <div className="analogueControls">
          <button
            className="knob"
            onClick={() => tune(-1)}
            aria-label="Previous station"
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
            onClick={() => tune(1)}
            aria-label="Next station"
          >
            ›
          </button>
        </div>

        <div className="frequencyLine" aria-hidden="true">
          {stations.map((item, index) => (
            <button
              key={item.id}
              className={index === stationIndex ? "tick selected" : "tick"}
              onClick={() => setStationIndex(index)}
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
