import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social">
        <li className="social-list">
          <a
            aria-label="gmail icon"
            target="_blank"
            rel="noreferrer"
            href="mailto: oziylev@gmail.com"
            className="social-link"
          >
            <i className="far fa-envelope"></i>
          </a>
        </li>
        <li className="social-list">
          <a
            aria-label="github icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Vitalii-Lazorenko"
            className="social-link"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
        <li className="social-list">
          <a
            aria-label="linkedin icon"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/prnvbirajdar/"
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <div className="TMDB">
        <a href="https://www.themoviedb.org/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="65" height="47"></img>
        </a>
        
      </div>
      <div className="copyright__div">
        <p className="copyright__p">
          <a className="copyright" href="#top" aria-label="copyright">
            ©{new Date().getFullYear()} Made by Vitalii Lazorenko | Зроблено Віталіем Лазоренко
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
