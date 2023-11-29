import React from 'react';
import Banner from './Banner/Banner';
import {requests} from './Axios';
import Row from './Row/row';


function MainPage(setSearchTerm) {
  return (
    <div>
      <Banner />
      <Row
        title={"Зараз дивлятся"}
        handleAPI={requests.trendingMovies}
        setSearchTerm={setSearchTerm}
      />
      <Row
        title={"Популярні фільми"}
        handleAPI={requests.popularMovies}
        setSearchTerm={setSearchTerm}
      />
      <Row
        title={"Фільми з найвищим рейтингом"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.topRatedMovies}
      />
      <Row
        title={"Комедійні фільми"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.comedyMovies}
      />
      <Row
        title={"Бойовики"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.actionMovies}
      />
      <Row
        title={"Романтичні фільми"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.romanticMovies}
      />
      <Row
        title={"Кримінальні фільми"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.crimeMovies}
      />
      <Row
        title={"Фільми жахів"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.horrorMovies}
      />
      <Row
        title={"Документальне кіно"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.documentaryMovies}
      />
    </div>
  );
}


export default MainPage;