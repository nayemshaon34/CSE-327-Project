import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return   <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({location}) => user.email? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivetRoute;