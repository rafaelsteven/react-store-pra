import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

const ProductDetail = () => {
    const {
        productToShow,
        isProductDetailOpen,
        closeProductDetail
    } = useContext(ShoppingCartContext);
    console.log(productToShow.images);
    return (
        <aside className={`${isProductDetailOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px] p-6 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000]`}>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>Detail</h2>
                <button onClick={()=>closeProductDetail()}>
                    <XMarkIcon className="text-black-500 size-6"></XMarkIcon>
                </button>
            </div>
            <figure>
                <img 
                className="w-full h-full rounded-lg" 
                src={productToShow.images} 
                alt={productToShow.title}
                />
            </figure>
            <p className="flex flex-col p-6">
                <span className="mb-2 text-2xl font-medium">${productToShow.price}</span>
                <span className="font-medium text-md">{productToShow.title}</span>
                <span className="text-sm font-light">{productToShow.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail};