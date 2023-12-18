import { INCREASE_QUANTITY, DECREASE_QUANTITY ,ADD_PRODUCT} from "./action";

const initialState = {
  products: [
    {
      id: 1,
      title: "iphone",
      image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      quantity: 1,
      amount: 589,
      unitPrice: 10,
    },
    {
      id: 2,
      title: "iphone-x",
      image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      quantity: 1,
      amount: 899,
      unitPrice: 10,
    },
    {
      id: 3,
      title: "Samsung",
      image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      quantity: 1,
      amount: 1249,
      unitPrice: 10,
    },
    {id: 4,
      title: "OPPOF19",
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      quantity: 1,
      amount: 280,
      unitPrice: 10,
    },
    {id: 5,
        title: "Huawei P30",
        image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        quantity: 1,
        amount: 499,
        unitPrice: 10,
      },
      
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity + 1,
                amount: (product.quantity + 1) * product.unitPrice,
              }
            : product
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: Math.max(0, product.quantity - 1),
                amount: Math.max(0, (product.quantity - 1) * product.unitPrice),
              }
            : product
        ),
      };

    // Add a case for adding a new product
    case ADD_PRODUCT:
      const { id, title, image, quantity, amount, unitPrice } = action.payload;
      return {
        ...state,
        products: [
          ...state.products,
          { id, title, image, quantity, amount, unitPrice },
        ],
      };

    default:
      return state;
  }
}

export default rootReducer;
