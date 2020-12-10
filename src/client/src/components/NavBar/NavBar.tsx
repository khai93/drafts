import React from 'react';

import { useRouteMatch } from 'react-router-dom';

import Logo from '../../assets/images/Drafts.png';

import "./NavBar.css"

export interface NavBarProps {
    /** If user is signed in */
    isAuthenticated: Boolean
}

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    let match = useRouteMatch();

    return (
        <nav className="navbar__ctn">
            <img src={Logo}></img>
            <ul>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#careers">Careers</a>
                </li>
            </ul>

            {
                props.isAuthenticated ? 
                    <a href="/signin" className="navbar__login_btn">Sign In</a>
                : 
                    <a href="/signup" className="navbar__login_btn">Sign Up</a>
            }
        </nav>
    )
}