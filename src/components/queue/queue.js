import React from "react";
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div class="queue_container flex">
      <div class="queue flex">
        <p class="upnext">Queue</p>
        <div class="queuelist">
          {tracks?.map((track, index) => (
            <div key={index + "key"} class="queueitem flex" onClick={() => setCurrentIndex(index)}>
              <p class="trackname" >{track?.track?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}