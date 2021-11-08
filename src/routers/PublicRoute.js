import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//aqui cierro y abro llaves porque voy a recibir
//varios componenetes en las properties
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //son todos los demas argumentos como e
    //el exact path etc necesito recuperarlos con el rest 
    //y puedo pasarlo al componente
}) => {

    return (

        <Route
            {...rest}
            component={(props) => ( //estamos recibiendo las pros history location etc

                (!isAuthenticated)
                    ?
                    (<Component {...props} />)
                    :
                    (<Redirect to="/" />)
            )
            }

        />

    )
}

// ponemos parentesis porque solo vamos a renderizar alog 


PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}