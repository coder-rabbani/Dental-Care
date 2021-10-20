import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

// context api for auth provider
const AuthProvider = ({children}) => {
    // const {children} = props;
    const allContexts = useFirebase();
    
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;