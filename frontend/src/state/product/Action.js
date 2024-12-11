import { api } from '@/config/apiConfig';
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REUQEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from '@/state/product/ActionType';

export const findProducts = (req) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = req;

  try {
    const { data } = await api.get(
      `/api/products?colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log(data);

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: e.message });
  }
};

export const findProductsById = (req) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REUQEST });

  const { productId } = req;

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log(data);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: e.message });
  }
};
