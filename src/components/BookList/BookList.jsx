// BookList.jsx

import clsx from "clsx";
import style from "../BookList/BookList.module.css";

const BookList = ({ books }) => {
  return (
    <ul className={style.card}>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
      <p className={clsx(style.title)}>Total books: {books.length}</p>
      <button className="button">Dowbload</button>
    </ul>

  );
};

export default BookList;

