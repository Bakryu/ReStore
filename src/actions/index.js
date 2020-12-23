const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payLoaded: newBooks,
  };
};
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};
const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payLoaded: error,
  };
};
const booksAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payLoaded: bookId,
  };
};
const bookRemovedFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payLoaded: bookId,
  };
};
const allBokRemovedFromCart = (bookId) => {
  return {
    type: "ALL_BOOK_REMOVED_FROM_CART",
    payLoaded: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks,
  booksAddedToCart,
  bookRemovedFromCart,
  allBokRemovedFromCart,
};
