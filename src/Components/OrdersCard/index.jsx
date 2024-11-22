import { ChevronRightIcon,ShoppingBagIcon,CalendarDaysIcon } from '@heroicons/react/24/outline'

const OrdersCard = (props) => {
    const{totalPrice,totalProducto,dateProduct} = props;
    const dateLeg = dateProduct.toLocaleString("es-ES", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
    return (
        <div className="flex items-center justify-between p-4 mb-3 border rounded-lg shadow-lg border-black-100 w-80">
            <div className="flex items-center justify-between w-full">
                <p className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="text-black-500 size-4"/>
                        <span className="font-light">{dateLeg}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShoppingBagIcon className="text-black-500 size-4"/>
                        <span className="font-light">{totalProducto} articles</span>
                    </div>
                </p>
                <p className="flex items-center gap-2">
                    <span className="text-2xl font-medium">${totalPrice}</span>
                    <ChevronRightIcon className="text-black-500 size-6"/>
                </p>
            </div>
        </div>
    );
};

export { OrdersCard };
