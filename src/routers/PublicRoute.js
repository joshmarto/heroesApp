import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({ 
        notAuthenticated,
        component: Component,
        ...rest
    }) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !notAuthenticated )
                    ? <Component { ...props } />
                    : ( <Redirect to="/" /> )
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired    
}
