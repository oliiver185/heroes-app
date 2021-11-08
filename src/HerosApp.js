import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'
import './styles/styles.scss';

const init = () => {

    return JSON.parse(localStorage.getItem('user')) || {logged:false};
}    
export const HerosApp = () => {
 
    const [user, dispatch] = useReducer(authReducer, {}, init)
    
    useEffect(() => {
       localStorage.setItem('user', JSON.stringify(user));
    }, [user])


    //este efecto es para que no perdamos el nombre del usurio al momento de
    //de recargar la pagina

    return (


        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}
