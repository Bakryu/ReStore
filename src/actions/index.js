const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payLoaded: newBooks,
  };
};
const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

export { booksLoaded, booksRequested };
