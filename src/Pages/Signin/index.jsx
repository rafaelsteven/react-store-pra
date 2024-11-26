import { useContext,useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { FormLogin } from "../../Components/FormLogin";
import { FormUser } from "../../Components/FormUser";

function Signin() {

  const {
    formLoginOrRegister,
    validarSignIn
        } = useContext(ShoppingCartContext);
        const { varSign_in, varAccount } = validarSignIn();
    if (varSign_in){
      // localStorage.setItem('sign_in', false); 
      // localStorage.setItem('account', {});
    } 
    return (
      <>
        {formLoginOrRegister === "login" ? <FormLogin/> : <FormUser/>}
      </>
    )
  }
  
  export {Signin};