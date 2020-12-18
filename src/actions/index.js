const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payLoaded: newBooks,
  };
};

export { booksLoaded };
