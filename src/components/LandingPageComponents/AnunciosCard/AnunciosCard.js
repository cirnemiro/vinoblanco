import React from 'react'

import './styles.scss'

const AnunciosCard = () => {
    return (
        <div className="anunciosCard">
            <div className="anunciosCard__header">
                <div className="anunciosCard__header__profile">
                    <div className="anunciosCard__header__profile__photo">
                        <img src={'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'} />
                    </div>
                    <div className="anunciosCard__header__profile__name">
                        <p>Maiki</p>
                    </div>
                </div>
                <div className="anunciosCard__header__date">
                    <p>10 de agosto</p>
                </div>
            </div>
            <div className="anunciosCard__content">
                <p>
                    Del 24 al 31 de agosto voy a estar
                    tatuando en tenerife. Para contactar
                    @vinoblanco69 y vinoblanco@gmail.com
                </p>
            </div>
        </div>
    );
}

export default AnunciosCard;