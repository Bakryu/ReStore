import React from "react";
import { BookstoreServicesConsumer } from "../BookstoreServicesContext";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServicesConsumer>
        {(BookstoreService) => {
          return <Wrapped {...props} bookstoreService={BookstoreService} />;
        }}
      </BookstoreServicesConsumer>
    );
  };
};
export default withBookstoreService;
