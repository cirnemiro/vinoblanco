import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../../App';

function ProtectedRoute({ ...props }) {

    const { superUser } = useContext(SessionContext)

    return superUser ? <Route {...props} /> : <Redirect to="/" />;
}

export default ProtectedRoute;
