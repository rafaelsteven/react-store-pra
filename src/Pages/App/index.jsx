import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { Signin } from '../Signin';
import { Navbar } from '../../Components/Navbar';
import { Layout } from "../../Components/Layout";
import './App.css';

const AppRoutes = () =>{
  let router = useRoutes([
    { path:'/',element:<Home /> },
    { path:'/category/:category',element:<Home /> },
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
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
