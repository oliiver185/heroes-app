import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { loginImage } from '../../helpers/heroImages';
import { types } from '../../types/types';






export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const handleLogin = () => {

        // history.push('/'); este si regresa a la ventana del login
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,

            payload: { name: 'Oli' }
        }
        )

        // history.replace('/');//ya no regresa a la lentana del login
        history.replace(lastPath);
    }

    //  replace no permite regresar a la pagina anterior en este caso
    //login porque le dimos replace


    return (
        <>

            <div style={{ backgroundImage: `url(${loginImage('./507151.jpg').default})`, minHeight: "100vh" }}>

                <div className="card-button">
                    {/* <img src={background}/> */}


                    <button
                        className="button2 button"
                        onClick={handleLogin}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </button>

                </div>
            </div>


        </>
    )

}