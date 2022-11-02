import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
