//react router
import{
  Route,
  createRoutesFromElements,
  CreateBrowserRouter,
  RouteProvider,
  createBrowserRouter,
}from "react-router-dom";

//context provider
import CartProvider from './context/CartProvider';
//layout
import RootLayout from "./layout/RootLayout";
//pages
import Home from "./pages/Home";
import ExploreProduct from "./pages/ExploreProducts";
import Product from "./pages/Product";
import Checkout from './pages/Checkout';
//toast
import { Toast, Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="/explore/:category" element={<ExploreProduct />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/checkout" element={<Checkout/>} />
    </Route>
  )
);


function App() {
  return (
    <>
    <CartProvider>
      <RouteProvider router={router} />
      <Toaster 
      toastOptions={{
        style:{
          padding:"16px",
          fontSize:"1.6rem"
        },
      }}
      />
    </CartProvider>
    </>
  );
}

export default App;
