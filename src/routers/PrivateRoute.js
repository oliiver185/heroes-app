import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//aqui cierro y abro llaves porque voy a recibir
//varios componenetes en las properties
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //son todos los demas argumentos como e
    //el exact path etc necesito recuperarlos con el rest 
    //y puedo pasarlo al componente
}) => {


    localStorage.setItem('lastPath', rest.location.pathname);
    return (

        <Route
            {...rest}
            component={(props) => ( //estamos recibiendo las pros history location etc

                (isAuthenticated)
                    ?
                    (<Component {...props} />)
                    :
                    (<Redirect to="/login" />)
            )
            }

        />

    )
}

// ponemos parentesis porque solo vamos a renderizar alog 


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}