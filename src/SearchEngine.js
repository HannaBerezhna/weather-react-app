import React from "react";

export default function Header() {
  return (
    <div className="Main-header">
      <form className="boxes">
        <input
          type="search"
          placeholder="Enter the city..."
          autocomplete="off"
          className="boxes-border beauty box-shadow"
        />
        <input
          type="submit"
          value="Search"
          className="boxes-border box-shadow"
        />
        <button className="boxes-border box-shadow">Current</button>
      </form>
    </div>
  );
}
