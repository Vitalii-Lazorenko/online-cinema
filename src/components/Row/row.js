import React, { useState, useEffect } from 'react';
import { instance, img_api } from '../Axios';
import { Link } from "react-router-dom";
import './row.css';


const Row = ({ title, handleAPI, setSearchTerm }) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await instance.get(handleAPI).catch((err) => {
                console.log('Row Error', err.response);
            });
            // перевірка на наявність файлів зображеннчя і нарізка в 10 фільмів
            // checking for image files and cutting into 10 movies
            const refinedMovies = response.data.results
            .filter((movie) => {
                return movie?.poster_path !== null || "" || undefined;
            })
            .slice(0, 10);

            setMovies(refinedMovies);
            return response;
        
        };

        fetchMovies();
    }, [handleAPI]);

    
    return (    
        
           
            <React.Fragment>
                <div className="row">
                    <h2 className="row__title">{title}</h2>
                    <div
                    className="row__posters"
                    >
                    {movies &&
                        movies.map((movie) => {
                        return (
                            <div
                            key={movie.id}
                            className="row__movie"
                            // onClick={() => setSearchTerm("")}
                            >
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={img_api.poster + movie?.poster_path}
                                    alt={movie.title}
                                    className="row__poster"
                                    />
                  
                            </Link>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </React.Fragment>
        
    );
};

export default Row;