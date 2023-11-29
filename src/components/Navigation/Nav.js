import React, { useState, useEffect } from "react";
import "./Nav.css";
import { requests, instance } from "../Axios";
import { Link, useHistory, withRouter } from "react-router-dom";

function Nav({ searchTerm, setSearchTerm }) {
  // SCROLLING SECTION. ПРОКРУТКРУЧУВАННЯ РОЗДІЛУ
  const [movies, setMovies] = useState([]);

  //Black bar appears on scroll, disappears when on top. Чорна смуга з’являється на прокручуванні, зникає вгорі
  const [navbar, setNavbar] = useState(false);

  //Scrolling useEffect. Прокручування useEffect
  useEffect(() => {
    //listen to scroll, if more than 80px, nav__active class is added
    //слухати прокручування, якщо більше 80 пікселів, додається клас nav__active
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    //removes scroll listener when not scrolling
    //видаляє слухач прокручування, коли не прокручується
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  // MOVIE SEARCH SECTION. РОЗДІЛ ПОШУКУ ФІЛЬМУ
  let history = useHistory();

  //function that calls API. функція, яка викликає API
  const getMovies = async (apiSearchTerm) => {
    console.log(apiSearchTerm);
    // default apiSearchTerm is 'e.target.value'.
    // if length is 0, the input is empty and we get back to main page
    //else we go to '/search' page of our React website
    // Типовим терміном apiSearchTerm є "e.target.value".
     // якщо довжина дорівнює 0, вхід порожній і ми повертаємось на головну сторінку
     //в іншому випадку ми переходимо на сторінку '/search' нашого веб-сайту React
    if (apiSearchTerm.length <= 1) {
      history.push("/");
      return;
    }

    const response = await instance
      .get(`${requests.searchMovies}?query=${apiSearchTerm}`)
      .catch((err) => {
        console.log("Search Error", err.response);
      });
    setMovies(response.data.results);
    history.push({
      pathname: "/search",
      movieRows: movies,
      searchInput: apiSearchTerm,
    });
  };

  //Renders movies based on what's being typed
  //Рендерить фільми на основі введеного тексту
  const handleChange = async (e) => {
    await setSearchTerm(e.target.value);

    await getMovies(searchTerm);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setSearchTerm("");
  };

  return (
    <nav>
      <div className={`nav ${navbar && "nav__active"}`}>
        <div className="nav__icon" onClick={() => setSearchTerm("")}>
          <Link to="/" aria-label="logo icon">
            <i className="fas fa-film"></i>
          </Link>
        </div>
        <form onSubmit={handleOnSubmit}>
          <input
            aria-label="search  "
            type="text"
            name="search"
            className="nav__input"
            placeholder="Пошук фільму"
            value={searchTerm}
            onChange={handleChange}
            autoComplete="off"
          />
        </form>
      </div>
    </nav>
  );
}

export default withRouter(Nav);