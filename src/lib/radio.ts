import sundayMorning from "../../data/playlists/sunday-morning.json";
import naiKiDukaan from "../../data/playlists/nai-ki-dukaan.json";
import highwayDhaba from "../../data/playlists/highway-dhaba.json";
import continentalBreakfast from "../../data/playlists/continental-breakfast.json";
import californiaRadio from "../../data/playlists/california-radio.json";
import wander from "../../data/playlists/wander.json";

export type Track = {
  position: number;
  title: string;
  artist: string;
  spotify_search: string;
  youtube_search: string;
  spotify_id?: string;
  note: string;
};

export type Playlist = {
  station: string;
  tracks: Track[];
};

export type Station = {
  id: string;
  place: string;
  image: string;
  playlist: Playlist;
};

export const stations: Station[] = [
  {
    id: "sunday-morning",
    place: "India",
    image: "/concepts/01_sunday_morning.png",
    playlist: sundayMorning,
  },
  {
    id: "nai-ki-dukaan",
    place: "India · 90s",
    image: "/concepts/02_nai_ki_dukaan.png",
    playlist: naiKiDukaan,
  },
  {
    id: "highway-dhaba",
    place: "India · On the road",
    image: "/concepts/03_highway_dhaba.png",
    playlist: highwayDhaba,
  },
  {
    id: "continental-breakfast",
    place: "Europe",
    image: "/concepts/04_continental_breakfast.png",
    playlist: continentalBreakfast,
  },
  {
    id: "california-radio",
    place: "California",
    image: "/concepts/05_california_radio.png",
    playlist: californiaRadio,
  },
  {
    id: "wander",
    place: "Everywhere",
    image: "/concepts/06_wander.png",
    playlist: wander,
  },
];
