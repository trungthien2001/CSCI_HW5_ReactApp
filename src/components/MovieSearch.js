import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovie, fetchMovies, searchMovie } from "../actions/movieActions";
import { Image } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const MovieSearch = () => {
  const movieList = useSelector((state) => state.movie.movies);
  const [search, setSearch] = useState({ searchTerm: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch({ searchTerm: e.target.value });
  };
  const handleSelect = (movie) => {
    dispatch(setMovie(movie));
  };

  const handleClick = (movie) => {
    dispatch(setMovie(movie));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(search));
  };
  if (!movieList.result) {
    // evaluates to true if currentMovie is null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search Movies"
          value={search.searchTerm}
          onChange={handleSearch}
        />
      </form>
      <div className="movies">
        {movieList.result.map((movie, i) => (
          <div className="movie" key={movie._id} onSelect={handleSelect(movie)}>
            <div>
              <LinkContainer
                to={"/movie/" + movie._id}
                onClick={() => handleClick(movie)}
              >
                <Image src={movie.imageUrl} thumbnail />
              </LinkContainer>
            </div>
            <h2>{movie.title}</h2>
            <Glyphicon glyph={"star"} /> {movie.avgRating} &nbsp;&nbsp;{" "}
            {movie.year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
