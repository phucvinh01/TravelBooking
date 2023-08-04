import React from "react";

const UserContext = React.createContext({ name: '', auth: false });

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ name: '', id: ' ', auth: false });

    const loginContext = (name, res, id) => {
        setUser((user) => ({
            name: name,
            id: id,
            auth: true,
        }));
        localStorage.setItem('token', res);
        localStorage.setItem('name', name);

    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setUser((user) => ({
            name: '',
            id: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={ { user, loginContext, logout } }>
            { children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };