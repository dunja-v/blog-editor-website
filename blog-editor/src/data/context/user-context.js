import React, { useState, useEffect } from 'react';
import { getUser } from '../../api/articleApi';

export const UserContext = React.createContext({});

export function UserContextProvider(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser().then((loadedUser) => {
            setUser(loadedUser);
        });    
    }, []);

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => React.useContext(UserContext);
