import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by Hanna Berezhna
      <br />
      <div className="d-flex justify-content-center">
        <a
          href="https://www.instagram.com/gannaberezhna/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hanna-berezhna-88277a234/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/HannaBerezhna/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github-square"></i>
        </a>
      </div>
    </div>
  );
}
