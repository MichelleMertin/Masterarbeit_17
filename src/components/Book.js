import React, { useEffect } from "react";

import "./Knopf.css";

const Book = ({ recommendedBooks }) => {
  console.log(recommendedBooks);

  const buttonsMarkup = recommendedBooks.map((book) => (
    <details key={book.id}>
      <summary>{book.title}</summary>
      <p>{book.author}</p>
      <p>{book.publishedDate}</p>
    </details>
  ));

  return <div>{buttonsMarkup}</div>;
};

export default Book;
