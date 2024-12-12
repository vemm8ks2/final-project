import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  PLACED_ORDER_REQUEST,
  DELIVERED_ORDER_REQUEST,
  CANCELLED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  PLACED_ORDER_SUCCESS,
  DELIVERED_ORDER_SUCCESS,
  CANCELLED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  PLACED_ORDER_FAILURE,
  DELIVERED_ORDER_FAILURE,
  CANCELLED_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
} from '@/state/admin/order/ActionType';

const initState = {
  loading: false,
  orders: [],
  error: '',
};

export const adminOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload, error: null };
    case GET_ORDERS_FAILURE:
      return { ...state, loading: false, orders: [], error: action.payload };

    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELLED_ORDER_REQUEST:
    case SHIP_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case CONFIRMED_ORDER_SUCCESS:
      return { ...state, confirmed: action.payload, isLoading: false };

    case PLACED_ORDER_SUCCESS:
      return { ...state, placed: action.payload, isLoading: false };

    case DELIVERED_ORDER_SUCCESS:
      return { ...state, delivered: action.payload, isLoading: false };

    case CANCELLED_ORDER_SUCCESS:
      return { ...state, cancelled: action.payload, isLoading: false };

    case SHIP_ORDER_SUCCESS:
      return { ...state, shipped: action.payload, isLoading: false };

    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCELLED_ORDER_FAILURE:
    case SHIP_ORDER_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case DELETE_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DELETE_ORDER_SUCCESS:
      return { ...state, isLoading: false, deletedOrder: action.payload };
    case DELETE_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
