import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
const FormUser = () => {
    const {
        saveRegisteredUser,
        setFormLoginOrRegister
    } = useContext(ShoppingCartContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); // Crea un objeto FormData
        const data = Object.fromEntries(formData.entries());
        saveRegisteredUser(data);
    };

    return (
        <form
            className="p-6 mt-10 space-y-6 bg-white rounded-lg shadow-lg w-96"
            onSubmit={onSubmit}
        >
            <h1 className="text-2xl font-semibold text-center text-gray-700">Create an account</h1>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">Username</label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    required
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    required
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="flex justify-between gap-4">
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Register
                </button>
                <button
                    type="button"
                    onClick={() => setFormLoginOrRegister('login')}
                    className="w-full px-4 py-2 font-semibold text-gray-700 transition bg-gray-300 rounded-md hover:bg-gray-400"
                >
                    sign in
                </button>
            </div>
        </form>
    );
}

export { FormUser };