import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

function Home() {
  
  const {
    items,
    setItems,
    searchByTitle, 
    setSearchByTitle
        } = useContext(ShoppingCartContext);


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
          items?.map((item)=>(
            <Card
            key={item.id}
            data={item}
            />
          ))
        }
        <ProductDetail />
        <CheckoutSideMenu />
        
      </div>
    </>
  )
}

export {Home};
