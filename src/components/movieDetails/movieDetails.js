import React, { useState, useEffect } from 'react';
import { instance, img_api } from '../Axios';
import Cast from './Casts/Casts';
import Crew from './Crew/Crew';
import Similar from './Similar/Similar';
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import './movieDetails.css';

function MovieDetails({match}) {
    //TODO по умолчанию тип данных должен быть того формата, который ожидается от сервера или null
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [similar, setSimilar] = useState(null);

    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await instance
            .get(`/movie/${match.params.id}?&append_to_response=videos,similar,credits`)
            .catch((err) => {
            console.log("MovieDetails Error", err.response);
            });
        //TODO Одновременно переопределения большого количеств состояний нужно избегать. 
        //Использую useReduce или разбивай как на примере movies.
        setMovie(response.data);
        setCredits(response.data.credits);

          return response;
        };

        fetchMovie();
    }, [match.params.id]);

    useEffect(()=>{
        if(movie){
            const refinedSimilarMovies = movie.similar.results
                .filter((movie) => {
                    return movie?.poster_path !== null || "" || undefined;
                }).slice(0, 10);

                const finalTrailer = movie.videos.results
                        .filter((movie) => {
                            return movie?.type === "Trailer";
                        }).slice(0, 1);

                setSimilar(refinedSimilarMovies);
                setTrailer(finalTrailer);
        }
    },[movie])

        // не дает выводить пустые масивы и как следвие ошибки
    if (!movie || !credits || !similar ) return null;

    return (
        <div className='movieDetails'>
            <div className='movieDetails_backdrop'
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    objectFit: "contain",
                    backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url(${img_api.backdrop}${movie?.backdrop_path})`,
                }}
            >
                <div className='movieDetails_main'>
                    <div className='movieDetails_info'>
                        <div>
                            <img  className="movieDetails__mainPoster"
                                src={img_api.posterBig + movie?.poster_path}
                                alt={movie?.title}/>
                        </div>
                        <div className='movieDetails_mainInfo'>
                            <h1 className='movieDetails_title'>
                                {movie?.title || movie?.original_name || movie?.name}{" "}
                                <span>({movie.release_date.substring(0, 4)})</span>
                            </h1>
                            {credits.crew && credits.crew
                                .filter((credit) => credit.job === "Director")
                                .slice(0, 1)
                                .map((credit) => (
                                 <p
                                className="movieDetails__director"
                                //
                                key={credit.id * Math.floor(Math.random() * 100)}
                                >
                                Режисер{" "}
                                <span className="movieDetails__director__span">
                                    {credit.original_name}
                                </span>{" "}
                                </p>
                            ))}{" "}
                            
                            {movie.runtime !== 0 ? (
                                <p className="movieDetails__runtime">
                                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m{" "}
                                </p>
                            ) : (
                                <p></p>
                            )}{" "}

                            <div className="movieDetails__genres">
                                {movie.genres.slice(0, 3).map((m, i) => {
                                return (
                                    <p
                                    key={m.id * Math.floor(Math.random() * 100)}
                                    className="movieDetails__genre"
                                    >
                                    {i ? "| " : ""}
                                    {m.name}
                                    </p>
                                );
                                })}
                            </div>

                            <div className="movieDetails__buttonDiv">
                                <button
                                className="trailer__button movieDetails__button"
                                onClick={() => setOpen(true)}
                                >
                                Увімкнути трейлер
                                </button>
                            </div>
                            <div>
                                <p className="movieDetails__overview">{movie.overview}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="movieDetails__trailer">
                {trailer.length !== 0 ? (
                <ModalVideo
                    channel="youtube"
                    autoPlay="true"
                    isOpen={isOpen}
                    videoId={trailer[0].key}
                    onClose={() => setOpen(false)}
                />
                ) : (
                null
                )}
            </div>

            <div className="movieDetails__cast">
                <Cast {...credits} />
            </div>

            <div className="movieDetails__cast">
                <Crew {...credits} />
            </div>

            <div className="movieDetails__similar">
                <Similar similar={similar} />
            </div>
        </div>
    );
};

export default MovieDetails;