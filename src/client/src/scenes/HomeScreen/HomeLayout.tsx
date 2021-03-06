import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar'
import { Hero } from "./Hero"; 
import { Features } from './Features';
import { Plans } from './Plans';
import { Footer } from '../../components/Footer/Footer';

import "./Home.css";

export interface HomeLayoutProps {

}

export const HomeLayout: React.FC<HomeLayoutProps> = (props: HomeLayoutProps) => {
    return (
        <header>
            <NavBar isAuthenticated={false} />
            <Hero />
            <Features />
            <Plans />
            <Footer />
        </header>
    )
}