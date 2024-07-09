import React from "react";
import "./WidgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body flex">
        {/* widget */}
      <img src={image} alt={title} className="entry-image" />
      <div class="entry-right-body flex">
        <p class="entry-title">{title}</p>
        <p class="entry-subtitle">{subtitle}</p>
      </div>

    </div>
  );
}