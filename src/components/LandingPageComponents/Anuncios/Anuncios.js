import React, { useContext } from 'react'
import { SessionContext } from '../../../App'
import AnunciosCard from '../AnunciosCard'

import './styles.scss'

const Anuncios = () => {

    const { superUser } = useContext(SessionContext)

    function handleEdit() {

    }

    return (
        <div className="anuncios">
            <h4>
                Anuncios
                {
                    superUser &&
                    <button onClick={handleEdit}>Edit</button>
                }
            </h4>
            <AnunciosCard />
        </div>
    );
}

export default Anuncios;