import { Route, Routes } from "react-router-dom";
//import { AuthPage } from "./pages/AuthPage";
import { ShoppingBasket } from "./pages/ShoppingBasket";
import { CatalogPage } from "./pages/CatalogPage";
import { CatalogIdPage } from "./pages/CatalogIdPage";
import { NotFound } from "./pages/NotFound";
import RegistredForm from "./components/RegistredForm";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/catalog/:id" element={<CatalogIdPage />}></Route>
        <Route path="/basket" element={<ShoppingBasket />}></Route>
        <Route path="/registration" element={<RegistredForm />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route>
        <Route></Route>
      </Route>
    </Routes>
  );
};
