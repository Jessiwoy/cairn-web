import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/RootLayout";
import { AccountPage } from "@/pages/AccountPage";
import { AdminPage } from "@/pages/AdminPage";
import { CartPage } from "@/pages/CartPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProductPage } from "@/pages/ProductPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { WishlistPage } from "@/pages/WishlistPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/catalog", element: <CatalogPage /> },
      { path: "/products/:slug", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
