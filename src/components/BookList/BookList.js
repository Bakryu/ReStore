import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../Hoc";
import { fetchBooks } from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import compose from "../../utils";

import "./bookList.css";

const BookList = ({ books }) => {
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
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
