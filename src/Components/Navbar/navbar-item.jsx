
import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { isPast } from "date-fns";

const MenuLeft =  () => { 
    const context = useContext(ShoppingCartContext);
    const menuLeft = [
    {
        className:"text-lg font-semibold",
        to:"/",
        text:"Shopi",
        isActive:true
    },
    {
        className:"",
        to:"/category/all",
        text:"All",
        isActive:true
    }];
    const categories = context.categories?.slice(0, 5).map(category => 
        ({ to: `/category/${category.id}`, text: category.name, isActive: true })
    ) || [];

    const menuLeftResponse = [...menuLeft,...categories];
return menuLeftResponse;
};
const MenuRight = () => {
    const {
        isCheckoutSideMenu,
        setIsCheckoutSideMenu,
        validarSignIn,
        signOut
    } = useContext(ShoppingCartContext);
    const { varSign_in, varAccount } = validarSignIn();
    const menuRight = [
        {
            className:"text-black/60",
            to:"",
            isLogin:true,
            text:varSign_in ?varAccount.email : "",
            isActive:false
        },
        {
            className:"",
            to:"/my-orders",
            isLogin:true,
            text:"My Orders",
            isActive:true
        },
        {
            className:"",
            to:"/my-account",
            isLogin:true,
            text:"My Account",
            isActive:true
        },
        {
            className:"",
            to:"/sign-in",
            text:"Sign In",
            isActive:true,
            isToTextExt:"Sign Out",
            isAcctionExt:()=>{signOut()},
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
    const menuRightResponse = menuRight.filter(menu=>{
        if(menu.isToTextExt && varSign_in){
            menu.text = menu.isToTextExt;
            menu.to = '';
            menu.isFuntion=true,
            menu.onClick = menu.isAcctionExt;
            return menu;
        }

        if(varSign_in && menu.isLogin){
            return menu;
        }else if(!menu.isLogin) return menu;
    });
    return menuRightResponse;
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

export {MenuLeft,MenuRight};