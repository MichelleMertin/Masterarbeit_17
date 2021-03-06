import React from "react";

import "./Knopf.css";

const Genre = (props) => {
  const genres = [
    {
      text: "Fantasy",
      handler: props.actionProvider.recommendGenre,
      id: 1
    },
    { text: "Krimi", handler: props.actionProvider.recommendGenre, id: 2 },
    {
      text: "Liebesroman",
      handler: props.actionProvider.recommendGenre,
      id: 3
    },
    {
      text: "Sci-Fi",
      handler: props.actionProvider.recommendGenre,
      id: 4
    }
  ];

  const genreHandler = (event) => {
    console.log(event.target.value);
    props.actionProvider.recommendGenre(event.target.value);
  };

  const buttonsMarkup = genres.map((genre) => (
    <button
      key={genre.id}
      value={genre.text}
      onClick={genreHandler}
      className="knopf-button"
    >
      {genre.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Genre;
