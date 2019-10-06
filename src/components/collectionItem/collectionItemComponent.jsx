import React from "react";

import CustomButton from "../customButton/customButtomComponent";

import "./collectionItemStyles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collecion-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
