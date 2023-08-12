import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { img_api } from './axios';

const SearchResults = ({setSearchTerm}) => {

    const history = useHistory();
    const movieSearchResults = history.location.row;

    console.log(movieSearchResults);

    const handleClick = () => {
        window.scrollTo(0,0);
        setSearchTerm('');
    };

    return (
       <>
      {movieSearchResults ? (
        <div className="searchResults">
          <h2 className="searchResults__title">Movie List</h2>
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
              По вашему запросу ничего ненайдено. <br /> Попробуйте использовать другие ключивіе слова.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;