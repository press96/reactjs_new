import React from 'react';

import './SideDrawer.css'

const SideDrawer = props => (
    <nav className="side-drawer">
        <div className="homeSlide"><div className="homePSlide1">Connectez-vous</div> <div className="homeSlide2"> Inscrivez-vous </div></div>
        <ul>
            <li><a href="/">Connexion</a></li>
            <li><a href="/">Paniers</a></li>
            <li><a href="/">Parfums</a></li>

        </ul>
    </nav>
);

export default SideDrawer;