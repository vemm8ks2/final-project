import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCT_BY_ID_REUQEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_FAILURE,
} from '@/state/product/ActionType';

const initState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

export const customerProductReducer = (state = initState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REUQEST:
      return { ...state, loading: true, error: null };

    case FIND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };

    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
