import { useContext,useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";


function Home() {
  
  const {
    searchByTitle, 
    setSearchByTitle,
    filterItems,
    setCategoryFilter,
    setFilterItems
        } = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let indexOrder = currentPath.substring(currentPath.lastIndexOf('/')+1);
    // if (indexOrder !== 'all') setCategoryFilter(indexOrder)
    // else setCategoryFilter('');

    useEffect(() => {
      if (indexOrder !== 'all') {
        setCategoryFilter(indexOrder);
      } else {
        setCategoryFilter(''); 
      }
    }, [indexOrder,setFilterItems]); 


    const renderView = () => {

        if(filterItems?.length > 0) {
          return (filterItems?.map((item)=>(
            <Card
            key={item.id}
            data={item}
            />
          )));
        }else {
          return (<div> No search results </div>);
        }
        
    }

  return (
    <>
        <div className="relative flex items-center justify-center mb-5 w-80">
           <h1 className="text-xl font-medium">Home</h1>
        </div>
        <input 
        type="text" 
        placeholder="Search a product"
        className="p-4 mb-4 border border-black rounded-lg w-80 focus:outline-none"
        value={searchByTitle}
        onChange={(event)=>setSearchByTitle(event.target.value)}
        />
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {
          renderView()
        }
        <ProductDetail />
        <CheckoutSideMenu />
        
      </div>
    </>
  )
}

export {Home};
