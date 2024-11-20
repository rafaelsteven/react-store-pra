import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isProductDetailOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px] p-6 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000]`}>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>Detail</h2>
                <button onClick={()=>context.closeProductDetail()}>
                    <XMarkIcon className="text-black-500 size-6"></XMarkIcon>
                </button>
            </div>
        </aside>
    )
}

export {ProductDetail};