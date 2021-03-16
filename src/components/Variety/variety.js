import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";

import Card from "../Card/card";

const Variety = () => {
  const { id: productId } = useParams();
  const products = useSelector((state) => state.products);

  const product = products.find((p) => +p.id === +productId);

  const dispatch = useDispatch();

  const addToCart = useCallback((item) => dispatch(actions.addItem(item)), [
    dispatch,
  ]);
  return (
    <>
      {product ? (
        <div>
          <h4 style={{ textAlign: "center" }}>{`${product.product_name}`}</h4>
          <h4
            style={{ textAlign: "center" }}
          >{`Description: ${product.product_description}`}</h4>
          {product.product_varieties.map((variety) => (
            <Card key={variety.id} style={{ width: 700, margin: "0 auto" }}>
              <p>{`Quantity: ${variety.quantity}`}</p>
              <p>{`Color: ${variety.color}`}</p>
              <p>{`Size: ${variety.size}`}</p>
              <p>{`Price: ${variety.price}`}</p>
              <div style={{ display: "flex" }}>
                {variety.images.map((image) => (
                  <Card key={image.id} style={{ width: 300 }}>
                    <img
                      src={image.image_url}
                      alt=" "
                      style={{
                        width: 300,
                        height: 300,
                      }}
                    />
                  </Card>
                ))}
              </div>
              <button
                onClick={() => {
                  addToCart({ name: product.product_name, variety });
                  alert("added to cart");
                }}
              >
                Add To Cart
              </button>
            </Card>
          ))}
        </div>
      ) : (
        <h2>Product not found</h2>
      )}
    </>
  );
};

export default Variety;
