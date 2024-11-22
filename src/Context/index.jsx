import { createContext, useState,useEffect} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {


    //Items products
    const [items,setItems] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      },[]);

    // Shopping cart
    const [countCars,setCountCars] = useState(0);

    // Product Detail open/close
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const oprenProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail . Show product
    const [productToShow,setProductToShow] = useState({});


    // Carts product
    const [cartProducts, setCartProducts] = useState([]);
    
    //status windos My Order
    const [isCheckoutSideMenu,setIsCheckoutSideMenu] = useState(false);
    const oprenCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

    // Order
    const [order, setOrder] = useState([]);

    // Search
    const [searchByTitle, setSearchByTitle] = useState('');

    console.log(searchByTitle);
    return(
        <ShoppingCartContext.Provider
        value={{
            countCars,
            setCountCars,
            oprenProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutSideMenu,
            setIsCheckoutSideMenu,
            oprenCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle, 
            setSearchByTitle
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
 