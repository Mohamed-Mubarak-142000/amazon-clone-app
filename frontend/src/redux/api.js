import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5050/api" });

/********************************************************************************************************** */
export const registerUser = ({ newForm, config }) =>
  API.post("/user/create-user", newForm, config);
export const login = ({ email, password }) =>
  API.post("/user/login-user", { email, password }, { withCredentials: true });
export const loadUser = () =>
  API.get("/user/get-user", { withCredentials: true });
export const logOut = () =>
  API.get("/user/logout-user", { withCredentials: true });
/************************************************************************************************************** */
export const registerSeller = ({ newForm, config }) =>
  API.post("/shop/create-seller", newForm, config);
export const sellerLogin = ({ email, password }) =>
  API.post(
    "/shop/login-seller",
    { email, password },
    { withCredentials: true }
  );
export const getSeller = () =>
  API.get("/shop/get-seller", { withCredentials: true });
export const logOutShop = () =>
  API.get("/shop/logout-shop", { withCredentials: true });
export const getInfoShop = (id) => API.get(`/shop/get-shop-info/${id}`);

/********************************************************************************************************** */
export const createProduct = ({ formData, config }) =>
  API.post("/product/create-product", formData, config);
export const getAllProducts = (id) =>
  API.get(`/product/get-all-products-shop/${id}`);
export const deleteProduct = (id) =>
  API.delete(`/product/delete-shop-product/${id}`, { withCredentials: true });
export const getAllProductsForUser = () => API.get("/product/get-all-products");
/********************************************************************************************************** */
export const createEvent = ({ formData, config }) =>
  API.post("/event/create-event", formData, config);
export const getAllEvents = (id) => API.get(`/event/get-all-events-shop/${id}`);
export const deleteEvent = (id) =>
  API.delete(`/event/delete-shop-event/${id} `, { withCredentials: true });
export const getAllEventsForUser = () => API.get("/event/get-all-events");
