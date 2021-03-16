import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";

import Card from "../Card/card";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = useCallback((id) => dispatch(actions.removeItem(id)), [
    dispatch,
  ]);
  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map(({ name, variety }) => (
            <div key={variety.id}>
              <Card style={{ width: 700, margin: "0 auto" }}>
                <h4 style={{ textAlign: "center" }}>{`${name}`}</h4>
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
                    removeFromCart(variety.id);
                    alert("removed from cart");
                  }}
                >
                  Remove From Cart
                </button>
              </Card>
            </div>
          ))}
          <button style={{ margin: 30 }}>
            <h3>Checkout</h3>
          </button>
        </>
      ) : (
        <h2 style={{ margin: 30 }}>Add to your Cart</h2>
      )}
    </div>
  );
};

export default Checkout;
