import React from 'react'
import Anuncios from '../../components/LandingPageComponents/Anuncios';
import Contacta from '../../components/LandingPageComponents/Contacta';
import Cover from '../../components/LandingPageComponents/Cover';
import MisTrabajos from '../../components/LandingPageComponents/MisTrabajos';
import Tienda from '../../components/LandingPageComponents/Tienda';
import './styles.scss'


const LandingPage = () => {

    return (
        <>
            <div className="landingPage">
                <Cover />
                <Anuncios />
                <MisTrabajos />
                <Tienda />
                <Contacta />
            </div>
        </>
    );
}

export default LandingPage;