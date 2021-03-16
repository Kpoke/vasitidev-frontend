import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  cart: [],
};

const addItem = (state, action) => {
  const newcart = [...state.cart];
  newcart.push(action.item);
  return { ...state, cart: newcart };
};

const removeItem = (state, action) => {
  const newcart = [...state.cart];
  const updatedCart = newcart.filter((value) => value.variety.id !== action.id);
  return { ...state, cart: updatedCart };
};

const setProducts = (state, action) => {
  return { ...state, products: action.products };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    default:
      return state;
  }
};

export default reducer;
