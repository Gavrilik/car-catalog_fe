import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { ShoppingBasket } from "./pages/ShoppingBasket";
import { CatalogPage } from "./pages/CatalogPage";
import { CatalogIdPage } from "./pages/CatalogIdPage";
import { NotFound } from "./pages/NotFound";
import { UserInfo } from "./pages/UserInfo";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/catalog/:id" element={<CatalogIdPage />}></Route>
        <Route path="/basket" element={<ShoppingBasket />}></Route>
        <Route path="/user" element={<UserInfo />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route>
        <Route path="*" element={<AuthPage />}></Route>
      </Route>
    </Routes>
  );
};
