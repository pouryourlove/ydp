import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  console.log(product);
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명: {product.title}</li>
          <li>상세설명: {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}

export default ProductItem;
