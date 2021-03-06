import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';
const PrivetRoute = ({ children, ...rest }) => {
    const [loginUser, setLoginUser] = useContext(userContext);
    return (

        <Route
            {...rest}
            render={({ location }) =>
                loginUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivetRoute;