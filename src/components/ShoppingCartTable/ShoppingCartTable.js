import React from "react";
import "./shoppingCartTable.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>1</tr>
          <tr>Size Reliability Engineering </tr>
          <tr>2</tr>
          <tr>$4</tr>
          <tr>Action</tr>
        </tbody>
      </table>
      <div className="total">Total: $210</div>
    </div>
  );
};
export default ShoppingCartTable;
