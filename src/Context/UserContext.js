import React from "react";

const UserContext = React.createContext({ name: '', id: ' ', auth: false, cart: [], cartLenght: 0 });

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ name: '', id: ' ', auth: false, cart: [] });
    const [search, setSearch] = React.useState(null);

    const loginContext = (name, res, id, cart) => {
        setUser((user) => ({
            name: name,
            id: id,
            auth: true,
            cart: cart
        }));
        localStorage.setItem('token', res);
        localStorage.setItem('name', name);
        localStorage.setItem('id', id);


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

    return (
        <UserContext.Provider value={ { user, loginContext, logout, addCart, handleSearch, search } }>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };