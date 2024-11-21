import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { OrderCard } from "../OrderCard";
import './styles.css';

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenu,
        closeCheckoutSideMenu,
        cartProducts, 
        setCartProducts,
        countCars,setCountCars
    } = useContext(ShoppingCartContext);
    console.log(cartProducts);

    const minusProduct = (id) => {
        const updatedCart = cartProducts
        .map(product => {
            if (product.id === id) {
                // Si el producto tiene más de 1 unidad, reduce la cantidad
                if (product.countProduct > 1) {
                    return {
                        ...product,
                        countProduct: product.countProduct - 1
                    };
                }
                
                return null;
            }
            return product;
        })
        .filter(product => product !== null); 
        setCountCars(countCars - 1);
        setCartProducts(updatedCart);
    };

    const plusProduct = (id) => {
        const updatedCart = cartProducts
        .map(product => {
            if (product.id === id) {
                    return {
                        ...product,
                        countProduct: product.countProduct + 1
                    };
            }
            return product;
        })
        setCountCars(countCars + 1);
        setCartProducts(updatedCart);
    };

    const deleteProduct = (id) =>{
        const updatedCart = cartProducts
        .map(product => {
            if (product.id === id) {
                setCountCars(countCars - product.countProduct);
                return null;
            }
            return product;
        })
        .filter(product => product !== null); 
        
        setCartProducts(updatedCart);
    };
    return (
        <aside className={`${isCheckoutSideMenu ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px]  border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[370px] h-[calc(100vh-90px)] transition-all duration-[3000]`}>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <button onClick={()=>closeCheckoutSideMenu()}>
                    <XMarkIcon className="text-black-500 size-6"></XMarkIcon>
                </button>
            </div>
            <div className="flex flex-col gap-2 p-1 mt-2 overflow-y-scroll">
                {
                    cartProducts.map((product)=>(
                        <OrderCard
                        key={product.id}
                        title={product.title}
                        images={product.images}
                        price={product.price}
                        countProduct={product.countProduct}
                        minusProduct={()=>{minusProduct(product.id)}}
                        plusProduct={()=>{plusProduct(product.id)}}
                        deleteProduct={()=>{deleteProduct(product.id)}}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export {CheckoutSideMenu};