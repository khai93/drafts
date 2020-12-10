import React from 'react';

import schoolBooksDrawing from '../../assets/images/drawings/schoolbooks-colour.svg';
import gradientBig from '../../assets/images/drawings/gradient-big.svg'

export interface HeroProps {

}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
    return (
        <section className="hero__ctn">
            <div className="hero__inner">
                <h1>TAKE NOTES THE RIGHT WAY!</h1>
                <h2>Easily take notes in a rich and simple notes-taking application.</h2>
                <button>GET STARTED</button>
            </div>

            <img className="hero__gradientBig" src={gradientBig}></img>
            <img className="hero__schoolBooks" src={schoolBooksDrawing}></img>
        </section>
    )
}