import React from "react";
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div class="albumInfo-card">
      <div class="albumName-container">
        <div class="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div class="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div class="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}