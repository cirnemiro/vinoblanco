import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { SessionContext } from '../../App';
import { singInWithEmailAndPassword } from '../../services/firebase/api/api';

const Admin = () => {

    const { loginSuperUser } = useContext(SessionContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    function handleLogin(e) {
        e.preventDefault()

        singInWithEmailAndPassword(email, password).then((response) => {
            console.log(response);
            loginSuperUser()
            history.push('/')

        })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
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
    );
}

export default Admin;