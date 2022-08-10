import React from "react";
import SearchEngine from "./SearchEngine";
import MainInformation from "./MainInformation";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <MainInformation />
    </div>
  );
}
