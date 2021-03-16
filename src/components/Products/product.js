import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";
import Card from "../Card/card";
import Loading from "../LoadingIndicator/loadingIndicator";
import "./product.css";

const Products = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const setProducts = useCallback(
    (products) => dispatch(actions.setProducts(products)),
    [dispatch]
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await axios.get(
          "https://vasiti-dev-test.herokuapp.com/product"
        );
        setLoaded(true);
        setProducts(data.data);
      } catch (e) {
        setError("Oops, An Error Occured");
        console.log(e);
      }
    }
    getProducts();
  }, [setProducts]);
  return loaded ? (
    <>
      <div className="container">
        <div className="tiles">
          {products.map((product, index) => (
            <div key={index} className="tile">
              <Card>
                <NavLink to={`/product/${product.id}/varieties`}>
                  <h4
                    style={{ textAlign: "center" }}
                  >{`${product.product_name}`}</h4>
                  <p>{`Description: ${product.product_description}`}</p>
                </NavLink>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="indicator">{error ? <h5>{error}</h5> : <Loading />}</div>
  );
};

export default Products;
