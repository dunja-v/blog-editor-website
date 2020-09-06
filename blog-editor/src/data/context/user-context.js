import React from 'react';

export const UserContext = React.createContext({});

export function UserContextProvider(props) {
    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => React.useContext(UserContext);
