import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import BookstoreServices from "./services/bookstore-services";
import { BookstoreServicesProvider } from "./components/BookstoreServicesContext";

import store from "./store";

const bookStoreService = new BookstoreServices();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServicesProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServicesProvider>
    </ErrorBoundary>
  </Provider>,document.getElementById("root")
);
