import React from "react";

export default function Header() {
  return (
    <div className="Main-header">
      <form className="boxes">
        <input
          type="search"
          placeholder="Enter the city..."
          autocomplete="off"
          className="boxes-border beauty"
        />
        <input type="submit" value="Search" className="boxes-border" />
        <button className="boxes-border">Current</button>
      </form>
    </div>
  );
}