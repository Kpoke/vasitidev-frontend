import * as actionTypes from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products,
  };
};

export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    item,
  };
};

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id,
  };
};
