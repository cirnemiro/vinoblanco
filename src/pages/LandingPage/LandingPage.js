import React from 'react'
import Anuncios from '../../components/LandingPageComponents/Anuncios';
import Cover from '../../components/LandingPageComponents/Cover';
import './styles.scss'


const LandingPage = () => {

    return (
        <>
            <div className="landingPage">
                <Cover />
                <Anuncios />
            </div>
        </>
    );
}

export default LandingPage;