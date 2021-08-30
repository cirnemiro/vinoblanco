import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { SessionContext } from '../App';
import { singInWithEmailAndPassword } from '../services/firebase/api/api';
import AdminRouter from './AdminRouter';
import SideMenu from './Components/SideMenu';

import './styles.scss'

const Admin = () => {

    const { loginSuperUser, superUser } = useContext(SessionContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault()

        singInWithEmailAndPassword(email, password).then((response) => {
            console.log(response);
            loginSuperUser()
        })
            .catch((error) => {
                console.log(error);
            })
    }

    return (

        <>
            {
                !superUser ?
                    <div className="admin">
                        If u are not the user i want you to be, get the fuck out of here
                    <div className="form">
                            <form>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                                <button onClick={handleLogin}>Enter</button>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="admin">
                        <SideMenu />
                        <AdminRouter />
                    </div>
            }
        </>

    );
}

export default Admin;