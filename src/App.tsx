import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Invisibass from "./pages/Invisibass";
import Subwoofers from "./pages/Subwoofers";
import Home from "./pages/Home";
import Reproductors from "./pages/Reproductors";
import { configureStore } from "@reduxjs/toolkit";
import { reducerArticles } from "./Data/reducerArticles";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import OrderComplete from "./pages/OrderComplete";



function App() {
  const store = configureStore({
    reducer: { reducerArticles },
  });

  

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Subwoofers />} path="/Subwoofers" />
          <Route element={<Reproductors />} path="/Reproductors" />
          <Route element={<Invisibass />} path="/Invisibass" />
          <Route element={<OrderComplete/>} path="/OrderComplete" />   
          <Route path='/:pages/:article' element={<ProductPage />} />
          <Route path="/Checkout" element={<CheckoutPage/>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
