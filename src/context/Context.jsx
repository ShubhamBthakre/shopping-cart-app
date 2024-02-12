import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const rating = [1, 2, 3, 4, 5];
const stock = [1, 2, 4, 6, 8];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Cart = createContext();
faker.seed(99); //it renders one type of data it's not gonna change data every time it called

function Context({ children }) {
  const products = [...Array(50)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    imageUrl: faker.image.urlLoremFlickr({ category: "fashion" }),
    inStock: stock[getRandomInt(0, stock.length)],
    fastDelivery: faker.datatype.boolean(),
    rating: rating[getRandomInt(0, rating.length)],
  }));
  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    sort: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
