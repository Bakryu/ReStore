import React from "react";
import "./shoppingCartTable.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Size Reliability Engineering</td>
            <td>2</td>
            <td>$4</td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: $210</div>
    </div>
  );
};
export default ShoppingCartTable;
