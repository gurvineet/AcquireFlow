// src/redux/baseReducer.js

const baseReducer = (typeAdd, typeDelete, typeUpdate) => (state = { items: [] }, action) => {
    switch (action.type) {
      case typeAdd:
        return { ...state, items: [...state.items, action.payload] };
      case typeDelete:
        return { ...state, items: state.items.filter((_, index) => index !== action.payload) };
      case typeUpdate:
        return {
          ...state,
          items: state.items.map((item, index) => (index === action.payload.index ? action.payload.item : item)),
        };
      default:
        return state;
    }
  };
  
  export default baseReducer;  