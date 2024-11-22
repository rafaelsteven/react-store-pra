
import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";


const menuLeft = [
    {
        className:"text-lg font-semibold",
        to:"/",
        text:"Shopi",
        isActive:true
    },
    {
        className:"",
        to:"/all",
        text:"All",
        isActive:true
    },
    {
        className:"",
        to:"/clothes",
        text:"Clothes",
        isActive:true
    },
    {
        className:"",
        to:"/electronics",
        text:"Electronics",
        isActive:true
    },
    {
        className:"",
        to:"/toys",
        text:"Toys",
        isActive:true
    },
    {
        className:"",
        to:"/others",
        text:"Others",
        isActive:true
    }
];
const MenuRight = () => {
    const {
        isCheckoutSideMenu,
            setIsCheckoutSideMenu,
    } = useContext(ShoppingCartContext);
    const menuRight = [
        {
            className:"text-black/60",
            to:"",
            text:"rs@admin.com",
            isActive:false
        },
        {
            className:"",
            to:"/my-orders",
            text:"My Orders",
            isActive:true
        },
        {
            className:"",
            to:"/my-account",
            text:"My Account",
            isActive:true
        },
        {
            className:"",
            to:"/sign-in",
            text:"Sign In",
            isActive:true
        },
        {
            className:"flex justify-center",
            to:"",
            text:<Cart/>,
            isActive:true,
            isFuntion:true,
            onClick:()=>{setIsCheckoutSideMenu(!isCheckoutSideMenu)}
        }
    ];
    return menuRight;
}

const Cart = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <div className="flex items-center justify-center">
            <ShoppingBagIcon className="w-6 h-6 text-black"/>
            <span>{context.countCars} </span>
        </div>
    );
};

export {menuLeft,MenuRight};