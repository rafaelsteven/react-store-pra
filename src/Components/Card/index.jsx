import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ({data}) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (dataProduct) => {
        context.setProductToShow(dataProduct);
        context.oprenProductDetail();
        context.closeCheckoutSideMenu();
    };

    const addProducto = (e,data)=> {
        e.stopPropagation();
        context.setCountCars(++ context.countCars);

        const isInCart = context.cartProducts.filter(product => product.id === data.id).length > 0;

        if(isInCart)
        {
            const updatedCart = context.cartProducts.map(product => {
                if (product.id === data.id) {
                    return {
                        ...product,
                        countProduct: (product.countProduct || 0) + 1 // Incrementa o inicializa en 2
                    };
                }
                return product;
            });
    
            context.setCartProducts(updatedCart); // Actualiza el carrito con los cambios
        } else {
            context.setCartProducts([...context.cartProducts, {...data,countProduct:1}]);
        }

        context.closeProductDetail();
        context.oprenCheckoutSideMenu();
    };

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart)
        {
            return(
                <button  
                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 font-bold bg-green-200 rounded-full"
                onClick={(e) =>addProducto(e,data)}
                >
                    <CheckIcon className="text-green-600 size-6"></CheckIcon>
                </button >
            );
        } else {
            return(
                <button  
                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 font-bold bg-white rounded-full"
                onClick={(e) =>addProducto(e,data)}
                >
                    <PlusIcon className="text-black-500 size-6"></PlusIcon>
                </button >
            );
        }
        
    }
    return (
        <div className="w-56 bg-white rounded-lg cursor-pointer h-60" onClick={() =>showProduct(data)}>
            <figure className="relative w-full mb-2 h-4/5">
                <span className="absolute bottom-0 left-0 px-3 py-0.5 m-2 text-xs text-black rounded-lg bg-white/60">{data.category.name}</span>
                <img className="object-cover w-full h-full rounded-lg" src={data.images[0]} alt={data.title} />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    );
}

export {Card};