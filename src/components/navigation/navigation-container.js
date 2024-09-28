import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class NavigationContainer extends Component {
    render() {
        return (
            <div className='nav-wrapper'>

                <div className='left-side'>
                    <div className='nav-link-wrapper'>
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/cats">Gatos</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/adopted">Adoptados</NavLink>
                    </div>
                    
                    <div className='nav-link-wrapper'>
                        <NavLink to="/contact">Contacto</NavLink>
                    </div>
                </div>

                <div className='right-side'>
                <div >
                        <NavLink to="/auth">Login</NavLink>
                    </div>
                </div>

            </div>
        );
    }
}