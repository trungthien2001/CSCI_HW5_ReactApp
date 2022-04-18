import React, { useEffect } from "react";
import { fetchMovies } from "../actions/movieActions";
import { setMovie } from "../actions/movieActions";
import {connect} from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MovieList = () => {
  const movieList = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSelect = (movie) => {
    dispatch(setMovie(movie));
  };

  const handleClick = (movie) => {
    dispatch(setMovie(movie));
  };

  if (!movieList.result) {
    // evaluates to true if currentMovie is null
    return <div>Loading...</div>;
  }

  return (
    <Carousel>
      {movieList.result.map((movie, i) => (
        <Carousel.Item key={movie._id} onSelect={handleSelect(movie)}>
          <div>
            <LinkContainer
              to={"/movie/" + movie._id}
              onClick={() => handleClick(movie)}
            >
              <Image className="image" src={movie.imageUrl} thumbnail />
            </LinkContainer>
          </div>
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <Glyphicon glyph={"star"} /> {movie.avgRating} &nbsp;&nbsp;{" "}
            {movie.year}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieList;
