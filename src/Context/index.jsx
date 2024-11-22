import { createContext, useState,useEffect} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {


    //Items products
    const [items,setItems] = useState(null);

    const [filterItems,setFilterItems] = useState(null);



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

    const filterdItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }
    useEffect(()=>{
        if(searchByTitle) setFilterItems(filterdItemsByTitle(items,searchByTitle))
        else setFilterItems(items);
      },[items,searchByTitle]);

    
    const [categoryFilter, setCategoryFilter] = useState('');

    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
      },[]);

    useEffect(()=>{
        let url = 'https://api.escuelajs.co/api/v1/products';
        if(categoryFilter) url = `https://api.escuelajs.co/api/v1/products?categoryId=${categoryFilter}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                setItems([]);
            } else {
                setItems(data);
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            setItems([]); 
        });
      },[categoryFilter]);

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
            setSearchByTitle,
            filterItems,
            setFilterItems,
            categories,
            setCategoryFilter
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
 