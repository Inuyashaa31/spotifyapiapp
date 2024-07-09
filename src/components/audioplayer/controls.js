import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  const s = () => {
    setIsPlaying = !isPlaying;
  };
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div class="controls-wrapper flex">
        <div class="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          class={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
          {/* <IoPlay /> */}
        </div>
        <div class="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}
