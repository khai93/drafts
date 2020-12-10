import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar'
import { Hero } from "./Hero";

import "./Home.css";

export interface HomeLayoutProps {

}

export const HomeLayout: React.FC<HomeLayoutProps> = (props: HomeLayoutProps) => {
    return (
        <header>
            <NavBar isAuthenticated={false} />
            <Hero />

            
        </header>
    )
}