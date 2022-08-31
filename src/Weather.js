import React from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  return (
    <div className="Weather mb-3">
      <SearchEngine defaultCity="London" />
    </div>
  );
}
