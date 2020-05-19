import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import 'font-awesome/css/font-awesome.min.css';
import Accueil from '../Accueil/Accueil.js'


const toolbar = props => (
    <div>
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="search"><a href="/" className='search1'><i className="fa fa-search"></i></a></div>
            <div className="toolbar_logo"><a href="/">SEPHORA</a> </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/"><i className="fa fa-user"></i></a> </li>
                    <li><a href="/"><i className="fa fa-shopping-basket"></i></a> </li>
                </ul>
            </div>
        </nav>
    </header>
    <div>
        <Accueil />
    </div>
    </div>
);

export default toolbar;


