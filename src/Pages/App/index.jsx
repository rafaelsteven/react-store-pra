import { useRoutes, BrowserRouter,Navigate } from 'react-router-dom';
import { useContext } from "react";
import { ShoppingCartProvider,ShoppingCartContext } from '../../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { Signin } from '../Signin';
import { Navbar } from '../../Components/Navbar';
import { Layout } from "../../Components/Layout";
import './App.css';



const AppRoutesValidation = () =>{
  const {
    validarSignIn
        } = useContext(ShoppingCartContext);
  
    const { varSign_in } = validarSignIn();
  let router = useRoutes([
    { path:'/',element:varSign_in ? <Home /> : <Navigate replace to="/sign-in" /> },
    { path:'/category/:category',element:varSign_in ? <Home /> : <Navigate replace to="/sign-in" /> },
    { path:'/my-account',element:<MyAccount /> },
    { path:'/my-order',element:<MyOrder /> },
    { path:'/my-orders',element:<MyOrders /> },
    { path:'/my-orders/last',element:<MyOrder /> },
    { path:'/my-orders/:id',element:<MyOrder /> },
    { path:'/sign-in',element:<Signin /> },
    { path:'/*',element:<NotFound /> },
  ]);

  return router;

};



const App = () => {
  // AppRoutesValidation();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutesValidation />
        </Layout>
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
