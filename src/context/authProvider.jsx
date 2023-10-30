import {useState,useEffect,createContext} from 'react'


import { getProfile } from '../services/authService';

const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [cargando,setCargando] = useState(true)
    const [auth,setAuth] = useState(null);

 
    useEffect(() => {
        authUser();
    }, [])


    const authUser = async() => {
        const token = localStorage.getItem('token');
        

        if(!token){
            setAuth(null);
            setCargando(false);
            return;
        }
        
        try {
            const user = await getProfile(token);

        
            if(!user){
                setAuth(null);
                setCargando(false);
                return;
            }

            setAuth(user);  
            setCargando(false);
        } catch (error) {
            setAuth(null);
            setCargando(false);
        }
       

    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={
            {auth,
            setAuth,
            cargando,
            logout,
            authUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

export {
    AuthProvider
}