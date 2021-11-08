import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);

    const history = useHistory();
    //    console.log(history);

    // const {dispatch} = useContext(AuthContext)
    // console.log(name);
    const handleLogout = () => {

        console.log('clikc');
        history.replace('/login')

        dispatch({
            type: types.logout,

        });
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Heroes App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-controls="multiCollapseExample1 multiCollapseExample2" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse multi-collapse" id="multiCollapseExample1" >
                <ul className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </ul>
            </div>

           
            <div className="navbar-collapse collapse multi-collapse w-100" id="multiCollapseExample2">
           
                <ul className="navbar-nav ml-auto">


                    <span
                        className="nav-item nav-link"
                    >{name}</span>



                    <button

                        className="nav-item nav-link btn"
                        onClick={handleLogout}

                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>

    )
}