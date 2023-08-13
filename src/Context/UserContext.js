import React from "react";

const UserContext = React.createContext({ name: '', id: ' ', auth: false, cart: [], cartLenght: 0, imgUpload: '' });

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ name: '', id: ' ', auth: false, cart: [], role: '' });
    const [search, setSearch] = React.useState(null);
    const [upload, setUpload] = React.useState("")

    const loginContext = (name, res, id, cart, role) => {
        setUser((user) => ({
            name: name,
            id: id,
            auth: true,
            cart: cart,
            role: role,
        }));
        localStorage.setItem('token', res);
        localStorage.setItem('name', name);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);


    };

    const handleSearch = (data) => {
        setSearch(data)
    }

    const addCart = (cart) => {
        setUser((user) => ({
            cartLenght: cart.length
        }));
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('numberOfCart');

        setUser((user) => ({
            name: '',
            id: '',
            auth: false,
            cart: null,
        }));
    };


    const uploadContext = (name) => {
        setUpload(name)
    }


    return (
        <UserContext.Provider value={{ user, loginContext, logout, addCart, handleSearch, search, uploadContext, upload }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };