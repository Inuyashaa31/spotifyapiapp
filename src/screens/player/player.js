import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/queue/queue";
import "../../shared/globalCss.css";
import AudioPlayer from "../../components/audioplayer/audioPlayer";
import Widgets from "../../components/widgets/widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div class="screen_container flex">
      <div class="song_card ">
        <SongCard album={currentTrack?.album} />
        <div class="audioplayer_card">
          <AudioPlayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div class="queue_card">
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
        <div class="widgets_card">
          <Widgets artistID = {currentTrack?.album?.artists[0]?.id}/>
        </div>

        
      </div>
      <div class="credits">
        <p class="creditsbody">In Association With Spotify</p>
      </div>
    </div>
  );
}
