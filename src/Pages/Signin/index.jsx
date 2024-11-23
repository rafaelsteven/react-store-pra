import { useContext,useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { FormLogin } from "../../Components/FormLogin";
import { FormUser } from "../../Components/FormUser";

function Signin() {
  const {
    formLoginOrRegister,
    sign_out
        } = useContext(ShoppingCartContext);
    return (
      <>
        {formLoginOrRegister === "login" ? <FormLogin/> : <FormUser/>}
      </>
    )
  }
  
  export {Signin};