export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_to_card":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "Remove_from_card":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      };

    case "Change_cart_qty":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "Sort_by_price":
      return { ...state, sort: action.payload };
    case "Filter_by_stock":
      return { ...state, byStock: !state.byStock };
    case "Filter_by_delivery":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "Filter_by_rating":
      return { ...state, byRating: action.payload };
    case "Filter_by_search":
      return { ...state, searchQuery: action.payload };
    case "Clear_filters":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
        sort: "",
      };

    default:
      return state;
  }
};
