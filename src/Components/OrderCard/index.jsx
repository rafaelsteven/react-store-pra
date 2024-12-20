import { XMarkIcon,MinusCircleIcon,PlusCircleIcon } from '@heroicons/react/24/outline'

const OrderCard = (data) => {

    let renderXMarkIcon;
    if(data.deleteProduct) {
        renderXMarkIcon = <XMarkIcon className="text-black-500 size-6"></XMarkIcon>;
    }
    let renderMinusCircleIcon;
    if(data.minusProduct) {
        renderMinusCircleIcon = 
                <button 
                className='flex items-center justify-center w-6 h-6 p-0 bg-blue-300 border rounded-full border-white-300'
                onClick={data.minusProduct}
                >
                    <MinusCircleIcon className="w-5 h-5 text-white"></MinusCircleIcon>
                </button>;
    }
    let renderPlusCircleIcon;
    if(data.plusProduct) {
        renderPlusCircleIcon = 
                <button 
                className='flex items-center justify-center w-6 h-6 p-0 bg-blue-300 border rounded-full border-white-300'
                onClick={data.plusProduct}
                >
                    <PlusCircleIcon className="w-5 h-5 text-white"></PlusCircleIcon>
                </button>;
    }
    return (
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img 
                    className='object-cover w-full h-full rounded-lg' 
                    src={data.images} 
                    alt={data.title}
                    />
                </figure>
                <div className='flex items-end justify-between w-56 gap-2'>
                    <div className='flex flex-col'>
                        <p className='text-xs font-normal w-45'>
                            {data.title}
                        </p>
                        <div className='flex items-center gap-2 mt-1 mb-1'>
                            {renderMinusCircleIcon}
                            <span className='underline underline-offset-2'>{data.countProduct} Unit</span>
                                {renderPlusCircleIcon}
                        </div>
                        <label className='font-bold'>Sub Total:</label>
                    </div>
                    
                    <div className='flex flex-col'>
                        <span className='w-16 text-lg font-light'>x ${data.price}</span>
                        <span className='text-lg font-medium'>${data.price * data.countProduct}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <button onClick={data.deleteProduct}>
                    {renderXMarkIcon}
                </button>
            </div>
        </div>
    );
};

export { OrderCard };
