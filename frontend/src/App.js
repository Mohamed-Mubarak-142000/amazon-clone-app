import React, { useEffect, useState } from "react";
import {
  ActivationToken,
  BestSelling,
  CheckOut,
  CreateProduct,
  Dashboard,
  FaqPage,
  Home,
  Login,
  Products,
  Register,
  ShopCreate,
  ShopHome,
  ShopLogin,
} from "./routes/Routers";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import EventsPage from "./pages/EventsPage/EventsPage";
import Spinner from "./components/spinner/Spinner";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Setting from "./pages/Setting/Setting";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import SellerActivationToken from "./pages/ActivationToken/SellerActivationToken";
import { loadUser } from "./redux/features/authSlice";
import { getSeller } from "./redux/features/sellerSlice";
import Protected from "./routes/Protected";
import ProtectedSeller from "./routes/ProtectedSeller";
import AllProducts from "./pages/AllProducts/AllProducts";
import CreateEvent from "./pages/createEvent/CreateEvent";
import AllEvents from "./pages/AllEvents/AllEvents";
import { getAllProductForUser } from "./redux/features/productSilce";
import { getAllEventsForUser } from "./redux/features/eventSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate page loading completion after 2 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getSeller());
    dispatch(getAllProductForUser());
    dispatch(getAllEventsForUser());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route
              path="/user/activation/:activation_token"
              element={<ActivationToken />}
            />

            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route
              path="/setting"
              element={
                <Protected>
                  <Setting />
                </Protected>
              }
            />

            <Route
              path="/checkout"
              element={
                <Protected>
                  <CheckOut />
                </Protected>
              }
            />

            <Route path="*" element={<NotFound />} />
            <Route path="/product/:name" element={<ProductDetails />} />

            {/********shop routes**** */}
            <Route
              path="/home-seller/:id"
              element={
                <Protected>
                  <ShopHome />
                </Protected>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedSeller>
                  <Dashboard />
                </ProtectedSeller>
              }
            />

            <Route
              path="/dashboard/create-product"
              element={
                <ProtectedSeller>
                  <CreateProduct />
                </ProtectedSeller>
              }
            />

            <Route
              path="/dashboard/all-products"
              element={
                <ProtectedSeller>
                  <AllProducts />
                </ProtectedSeller>
              }
            />

            <Route
              path="/dashboard/all-events"
              element={
                <ProtectedSeller>
                  <AllEvents />
                </ProtectedSeller>
              }
            />

            <Route
              path="/dashboard/create-event"
              element={
                <ProtectedSeller>
                  <CreateEvent />
                </ProtectedSeller>
              }
            />

            <Route path="/seller-create" element={<ShopCreate />} />
            <Route path="/seller-login" element={<ShopLogin />} />
            <Route
              path="/shop/activation/:activation_token"
              element={<SellerActivationToken />}
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
