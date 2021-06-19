import React, { useState, useEffect } from 'react';
import { getUser } from '../../api/articleApi';
import { UserModel } from '../models';

export const UserContext = React.createContext({} as UserModel);

type UserContextProviderProps = {
    children: React.ReactNode;
    value: UserModel;
}

export function UserContextProvider(props: UserContextProviderProps) {
    const [user, setUser] = useState({} as UserModel);

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

export const useUserContext = () => React.useContext<UserModel>(UserContext);
