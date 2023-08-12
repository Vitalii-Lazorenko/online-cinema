import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Nav from './components/nav';
// import Banner from './components/banner';
import {requests} from './axios';
import Row from './row';


function MainPage(setSearchTerm) {
  return (
    <div>
      {/* <Header />
      <Nav />
      <Banner /> */}
      <Row
        title={"Trending Movies"}
        handleAPI={requests.trendingMovies}
        setSearchTerm={setSearchTerm}
      />
      <Row
        title={"Popular Movies"}
        handleAPI={requests.popularMovies}
        setSearchTerm={setSearchTerm}
      />
      <Row
        title={"Top Rated Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.topRatedMovies}
      />
      <Row
        title={"Comedy Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.comedyMovies}
      />
      <Row
        title={"Action Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.actionMovies}
      />
      <Row
        title={"Romantic Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.romanticMovies}
      />
      <Row
        title={"Crime Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.crimeMovies}
      />
      <Row
        title={"Horror Movies"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.horrorMovies}
      />
      <Row
        title={"Documentaries"}
        setSearchTerm={setSearchTerm}
        handleAPI={requests.documentaryMovies}
      />
      {/* <Footer /> */}
    </div>
  );
}


export default MainPage;