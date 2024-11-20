import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = ({data}) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (dataProduct) => {
        context.oprenProductDetail();
        context.setProductToShow(dataProduct);
    };

    const addProducto = (e,data)=> {
        e.stopPropagation();
        context.setCountCars(++ context.countCars);
        context.setCartProducts([...context.cartProducts, data]);
    };
    return (
        <div className="w-56 bg-white rounded-lg cursor-pointer h-60" onClick={() =>showProduct(data)}>
            <figure className="relative w-full mb-2 h-4/5">
                <span className="absolute bottom-0 left-0 px-3 py-0.5 m-2 text-xs text-black rounded-lg bg-white/60">{data.category.name}</span>
                <img className="object-cover w-full h-full rounded-lg" src={data.images[0]} alt={data.title} />
                <button  
                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 font-bold bg-white rounded-full"
                onClick={(e) =>addProducto(e,data)}
                >
                   <PlusIcon className="text-black-500 size-6"></PlusIcon>
                </button >
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    );
}

export {Card};