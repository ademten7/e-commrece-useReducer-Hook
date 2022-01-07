import React, { createContext, useReducer, useContext } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
const MyContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  //Syntax:
  //const [state, dispatch] = useReducer(reducer, initialState, init) }

  //cartReducer==> put all functions here ===These are inside Reducer.js
  /*{
    ==>these are initial states
    products:products,
    cart:[]
}
*/
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <MyContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
export const CartState = () => {
  return useContext(MyContext);
};
