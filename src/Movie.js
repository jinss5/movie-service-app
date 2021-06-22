import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) { //utilized function instead of class because state component is not used
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie__title" style={{backgroundColor: "#A9A9A9"}}>{title}</h3> //css editing is do-able
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">{genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
                </ul>
                <p className="movie__summary">{summary.slice(0,140)}...</p> //sliced the summary setion
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;