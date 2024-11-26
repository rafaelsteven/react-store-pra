
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
function MyAccount() {
  const {
    validarSignIn,
    editAccount,
    setEditAccount,
    account,
    setAccount,
    editAccountData,
} = useContext(ShoppingCartContext);
const {varAccount} = validarSignIn();

const onSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target); 
  const data = Object.fromEntries(formData.entries());
  editAccountData(data);
};
  const dataAccount = () =>{
    
    return(
    <div className="flex flex-col items-center justify-center gap-3 w-96">
      <div className="flex gap-2">
        <label className="font-bold">Name:</label>
        <p>{account.name}</p>
      </div>
      <div className="flex gap-2">
        <label className="font-bold">Email:</label>
        <p>{account.email}</p>
      </div>
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md" onClick={()=>setEditAccount(false)}>Edit</button>
    </div>);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const editForm = () =>{    
    return(
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-between gap-3 w-96">
      <div className="flex gap-2">
        <label className="font-bold">Name:</label>
        <input type="text" name="name" defaultValue={account.name} onChange={handleChange} className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
      </div>
      <div className="flex gap-2">
        <label className="font-bold">Email:</label>
        <input type="text" name="email" defaultValue={account.email} onChange={handleChange} className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
      </div>
      <div className="flex gap-2">
        <label className="font-bold">Password:</label>        
        <input type="text" name="password" defaultValue={account.password} onChange={handleChange} className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">Save</button>
        <button type="button" onClick={()=>setEditAccount(true)} className="px-4 py-2 text-white bg-blue-500 rounded-md">Cancelar</button>
      </div>
    </form>);
  }

    return (
      <>
        <div className="relative flex items-center justify-center mb-5 w-80">
          <h1 className="text-xl font-medium">My Account</h1>
        </div>
        {editAccount?dataAccount(): editForm()}
      </>
    )
  }
  
  export {MyAccount};
  