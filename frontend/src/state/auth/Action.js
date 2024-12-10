import { API_BASE_URL } from '@/config/apiConfig';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
} from '@/state/auth/ActionType';

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const res = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = res.data;

    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }

    dispatch(registerSuccess(user.jwt));
  } catch (e) {
    dispatch(registerFailure(e.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const res = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = res.data;

    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }

    dispatch(loginSuccess(user.jwt));
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};

const token = localStorage.getItem('jwt');
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const res = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = res.data;

    dispatch(getUserSuccess(user));
  } catch (e) {
    dispatch(getUserFailure(e.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
};
