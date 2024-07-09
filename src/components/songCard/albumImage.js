import React from "react";
import "./albumImage.css";

export default function AlbumImage({url}) {
    console.log(url)
  return (
    <div class="albumImage flex">
      <img src={url} alt="album cover" class="albumImage-art" />
      <div class="albumImage-shadow">
        <img src={url} alt="shadow" class="albumImage-shadow" />
      </div>
    </div>
  );
}