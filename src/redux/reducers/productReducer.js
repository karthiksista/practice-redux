import { ActionTypes } from '../constants/action-types';

const initialState = [];

export const productReducer = (state = initialState, { type, payload }) => {
  console.log(payload, 'pay');
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export default productReducer;
