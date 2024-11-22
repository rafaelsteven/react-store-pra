import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrdersCard } from "../../Components/OrdersCard";


function MyOrders() {
  const {
    order,
} = useContext(ShoppingCartContext);
console.log(order);
    return (
      <>
      <div className="relative flex items-center justify-center mb-4 w-80">
      <h1 className="text-xl font-medium">My Orders</h1>
      
      </div>
        {
          order.map((order,index)=>(
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
              totalPrice={order.totalPrice}
              totalProducto={order.totalProducts}
              dateProduct={order.date}
              />
            </Link>
          ))
        }
        
       </>
    )
  }
  
  export {MyOrders};