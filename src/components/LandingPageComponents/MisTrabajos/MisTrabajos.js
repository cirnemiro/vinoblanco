import React, { useContext } from 'react'
import { SessionContext } from '../../../App';

import './styles.scss'

const MisTrabajos = () => {

    const { superUser } = useContext(SessionContext)

    function handleEdit() {
    }

    return (
        <div className="misTrabajos">
            <div className="misTrabajos__header">
                <div className="misTrabajos__header__tittle">
                    <h4>
                        Mis Trabajos
                    </h4>
                    {/* {
                        superUser &&
                        <button onClick={handleEdit}>Edit</button>
                    } */}
                </div>
                <div className="misTrabajos__header__showMore">
                    <p>ver todos</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default MisTrabajos;