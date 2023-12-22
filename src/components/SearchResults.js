import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { img_api } from './Axios';
import "./SearchResults.css";

const SearchResults = ({setSearchTerm}) => {

    const history = useHistory();
    const movieSearchResults = history.location.movieRows;

    console.log(movieSearchResults);

    const handleClick = () => {
        window.scrollTo(0,0);
        setSearchTerm('');
    };

    return (
       <>
      {movieSearchResults ? (
        <div className="searchResults">
          <h2 className="searchResults__title">Список фільмів</h2>
          <div className="searchResults__div">
            {movieSearchResults
              .filter((movie) => {
                return movie.poster_path !== null || "" || undefined;
              })
              .map((movie) => {
                return (
                  <div key={movie.id} className="searchResults__card">
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        onClick={handleClick}
                        className="searchResults__images"
                        src={img_api.poster + movie.poster_path}
                        alt={movie.title}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results__text">
            <p>
              На ваш запит нічого не знайдено. <br /> Спробуйте використати інші ключові слова.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;