import { useState,useEffect } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function Home() {
  const context = useContext(ShoppingCartContext);
  const [items,setItems] = useState(null);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  },[]);

  return (
    <>
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
        
      </div>
    </>
  )
}

export {Home};
