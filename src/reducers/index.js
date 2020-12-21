const initialState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        books: action.payLoaded,
        loading: false,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payLoaded,
      };
    default:
      return state;
  }
};

export default reducer;
