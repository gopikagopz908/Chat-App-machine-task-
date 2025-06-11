import {  createContext, useContext, useState } from "react";


export const AuthContext=createContext()

export const useAuthContext=()=>{
    return useContext(AuthContext)
}


export const AuthContextProvider=({Children})=>{
   const storedUser = localStorage.getItem('user');
 const [authUser, setAuthUser] = useState(storedUser ? JSON.parse(storedUser) : null);  

return(
    <AuthContext.Provider value={{authUser,setAuthUser}}>
        {Children}
    </AuthContext.Provider>
)
}