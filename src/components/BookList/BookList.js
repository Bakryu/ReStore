import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../Hoc";
import { booksLoaded, booksRequested } from "../../actions";
import Spinner from "../Spinner";

import "./bookList.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
