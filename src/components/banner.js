import React from 'react';
import axios from './axios';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzVmYjdjZjJjNjZhZGQ2MjNjYzU2MGUzZDg4YmZiZCIsInN1YiI6IjY0NmExMTYyMzNhMzc2MDEzYjNlNzI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6fzxxRLMVtS9EyYHWVzmAgQr3cScv5rvC0MX4zFF0o'
    }
  };
const Banner = () => {
    // async function fetchBanner () {
    //     const response = await get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err))
    //     return response
    // }
    // fetchBanner();
    return (
        <div>
            Здесь будет банер рандомного фильма
            <header className="banner">
                <div className="banner_contents">
                    <h1 className="banner_title">
                        Название фильма на банере
                        {/* {response.date.results.slise(0, 10).map(mov => (
                        <div>{mov.title}</div> */}
             {/* ))} */}
                    </h1>
                    <a href='ссылка на фильм баннер'>
                        {/* <button className="button_banner" onClick={fetchBanner}>Подробности</button> */}
                    </a>
                    <h1 className="banner_overview">Описание фильма с банера</h1>
                </div>

            </header>
        </div>
    );
};

export default Banner;