import React from "react";
import { img_api } from "../axios";
import BackupImage from "./free-icon-avatar-147285.png";

function Crew(credits) {

  return credits.crew.length !== 0 ? (
    <div className="movieDetails__credits movieDetails__creditsCrew">
      <h2 className="movieDetails__credits__title">Crew</h2>
      <div
        className="movieDetails__credits__profile"
      >
        {credits.crew &&
          credits.crew.slice(0, 9).map((credit) => {
            return (
              <div className="movieDetails__credits__card" key={credit.id}>
            
                <img
                  className="movieDetails__credits__images"
                  src={
                    credit?.profile_path
                      ? img_api.poster + credit?.profile_path
                      : BackupImage
                  }
                  alt={credit?.name}
                />
                <div className="movieDetails__credits__text">
                  <p className="movieDetails__credits__name">
                    {credit?.name || credit?.original_name}
                  </p>
                  <p>{credit?.job}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Crew;