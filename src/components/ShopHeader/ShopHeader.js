import "./shopHeader.css";
import React from "react";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <span className="logo text-dark" href="#">
        ReStore
      </span>
      <span className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </span>
    </header>
  );
};
export default ShopHeader;
