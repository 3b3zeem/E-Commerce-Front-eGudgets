import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layouts/Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { lazy, Suspense } from "react";
import NotFound from "../components/NotFound/NotFound.jsx";
import AuthRoute from "./AuthRoute.jsx";
import GuestRoute from "./GuestRoute.jsx";
import Chat from "../pages/Chat/Chat.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Register = lazy(() => import("../pages/Auth/Register.jsx"));
const Login = lazy(() => import("../pages/Auth/Login.jsx"));
const Profile = lazy(() => import("../pages/Profile/Profile.jsx"));
const Cart = lazy(() => import("../pages/Cart/Cart.jsx"));
const WishList = lazy(() => import("../pages/WishList/WishList.jsx"));
const Loader = lazy(() => import("../layouts/Loader.jsx"));
const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails.jsx")
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <AuthRoute>
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          </AuthRoute>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRoute>
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          </GuestRoute>
        ),
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          </GuestRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthRoute>
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          </AuthRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <AuthRoute>
            <Suspense fallback={<Loader />}>
              <WishList />
            </Suspense>
          </AuthRoute>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <AuthRoute>
            <Suspense fallback={<Loader />}>
              <ProductDetails />
            </Suspense>
          </AuthRoute>
        ),
      },
      {
        path: "customerSupport",
        element: (
          <AuthRoute>
            <Suspense fallback={<Loader />}>
              <Chat />
            </Suspense>
          </AuthRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
