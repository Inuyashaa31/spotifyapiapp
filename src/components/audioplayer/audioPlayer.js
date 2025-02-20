import React, { useEffect, useRef, useState } from "react";
import "./audioPlayer.css";
import Controls from "./controls";

export default function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
    
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;
  console.log(currentPercentage);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) =>{
    return n>9?"" + n : "0"+n;
  }

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  // const [width, setWidth] = useState(0); 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWidth((prevWidth) => prevWidth + 7.466666);
  //     if (width >= 224) {
  //       clearInterval(interval);
  //       console.log("width "+width)
  //     }
  //   }, 1000); 
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [width]);

  return (
    <div class="audioplayer_container">
      <div class="audioplayerbody">
        <p class="songtitle">{currentTrack?.name}</p>
        <p class="songartist">{artists.join(" | ")}</p>
        <div class="flex blah">
          <p class="duration">0:{addZero(Math.round(trackProgress))}</p>
          <div class="progressbar">
            <div class="progressed" id="progressed" >
            {/* style={{width : `${width}px`}} */}
              
            </div>
            
          </div>
          <p class="duration">0:30</p>
        </div>
      </div>
      <Controls
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      handleNext={handleNext}
      handlePrev={handlePrev}
      total={total}
      />
    </div>
  );
}
