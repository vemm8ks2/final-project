import { api, API_BASE_URL } from '@/config/apiConfig';
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
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

export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });

  try {
    const { data } = await api.post(`${API_BASE_URL}/api/admin/products/`, product);

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: e.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });

  try {
    const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);

    console.log(data);

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (e) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: e.message });
  }
};
