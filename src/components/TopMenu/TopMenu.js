import React, { useContext } from 'react'
import './styles.scss'

import hamburger from '../../assets/icons/hamburger.svg'
import cart from '../../assets/icons/cart.svg'
import logo from '../../assets/icons/logo.png'
import { SessionContext } from '../../App'

const TopMenu = () => {

    const { superUser, loginSuperUser } = useContext(SessionContext)

    console.log(superUser);


    return (
        <div className="topMenu">
            <div className="topMenu__mobile">
                <div className="topMenu__mobile__hamburger">
                    <img src={hamburger} />
                </div>
                <div className="topMenu__mobile__rightAside">
                    <div className="topMenu__mobile__rightAside__cart">
                        <img src={cart} />
                    </div>
                    <div className="topMenu__mobile__rightAside__logo">
                        <img src={logo} />
                    </div>
                    {
                        superUser &&
                        <div className="topMenu__mobile__rightAside__userIcon">
                            <img src={'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'} />
                        </div>
                    }
                </div>
            </div>
            <div className="topMenu__desktop">
                <div className="topMenu__desktop__logo">
                    <img src={logo} />
                </div>
                <div className="topMenu__desktop__nav">
                    <ul>
                        <li>Home</li>
                        <li>Work</li>
                        <li>Shop</li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="topMenu__desktop__cart">
                    <img src={cart} />
                </div>
                {
                    superUser &&
                    <div className="topMenu__mobile__rightAside__userIcon">
                        <img src={'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg'} />
                    </div>
                }
            </div>
        </div>
    );
}

export default TopMenu;
