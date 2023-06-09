import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    

    const AuthInfo = {user, setUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;