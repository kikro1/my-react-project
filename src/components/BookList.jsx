// BookList.jsx

import clsx from "clsx";
import styles from "../components/BookList.module.css";

const BookList = ({ books }) => {
  return (
    <ul className={styles.card}>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
      <p className={clsx(styles.title)}>Total books: {books.length}</p>
      <button className="button">Dowbload</button>
    </ul>

  );
};

export default BookList;

