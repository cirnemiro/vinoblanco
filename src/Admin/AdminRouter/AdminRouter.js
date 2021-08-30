import React, { useEffect } from 'react'
import { Route, Router, Switch, useLocation, useParams } from 'react-router-dom';
import AnunciosEdit from '../Pages/AnunciosEdit';
import Info from '../Pages/Info';
import LandingPage from '../Pages/LandingPage';
import MisTrabajosEdit from '../Pages/MisTrabajosEdit';
import Tienda from '../Pages/Tienda';


const AdminRouter = () => {

    let { page } = useParams()

    useEffect(() => {

    }, [])

    console.log(page);

    return (
        <div>
            {
                !page ?
                    <LandingPage />
                    :
                    (
                        page === 'anuncios' ?
                            <AnunciosEdit />
                            :
                            (
                                page === 'mis-trabajos' ?
                                    <MisTrabajosEdit />
                                    :
                                    (
                                        page === 'info' ?
                                            <Info />
                                            :
                                            (
                                                page === 'tienda' ?
                                                    <Tienda />
                                                    :
                                                    <LandingPage />
                                            )
                                    )
                            )

                    )

            }
        </div>
    );
}

export default AdminRouter;