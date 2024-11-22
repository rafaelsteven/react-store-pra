import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, } from '@heroicons/react/24/outline';
function MyOrder() {
  const {
    order,
        } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let indexOrder = currentPath.substring(currentPath.lastIndexOf('/')+1);
  if (indexOrder === 'last') indexOrder = order?.length - 1
    return (
      <>
        <div className="relative flex items-center justify-center mb-5 w-80">
          <Link to={"/my-orders"} className="absolute left-0">
            <ChevronLeftIcon className="text-black-500 size-6"></ChevronLeftIcon>
          </Link>
          <h1 className="text-xl font-medium">My Order</h1>
        </div>
        <div className="flex flex-col gap-2 w-80">
                {
                    order?.[indexOrder]?.products.map((product)=>(
                        <OrderCard
                        key={product.id}
                        title={product.title}
                        images={product.images}
                        price={product.price}
                        countProduct={product.countProduct}
                        />
                    ))
                }
            </div>
      </>
    )
  }
  
  export {MyOrder};