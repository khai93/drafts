import React from 'react';

import LandingSuccessIcon from '../../assets/images/icons/landing-success-icon.png';
import SentMessageIcon from '../../assets/images/icons/sent-message-icon.png';
import SuccessIcon from '../../assets/images/icons/success-icon.png';

import "./Features.css"

export interface FeaturesProps {

}

export const Features: React.FC<FeaturesProps> = (props: FeaturesProps) => {
    return (
        <section className="home__features">
            <h3>OUR FEATURES</h3>
            <article>
                <img src={SuccessIcon}></img>
                <div>
                    <h5>A Simple Editor.</h5>
                    <p>Our simplicity design allows beginners to take advanced notes on the first day of usage.</p>
                </div>
            </article>
            <article>
                <img src={SentMessageIcon}></img>
                <div>
                    <h5>Shareable notes.</h5>
                    <p>You can share your notes to anyone with your sharable link with only viewing access!</p>
                </div>
                </article>
            <article>
                <img src={LandingSuccessIcon}></img>
                <div>
                    <h5>Browser-based app.</h5>
                    <p>Our application was made for the browser and will be supported by any platform with a browser!</p>
                </div>
            </article>
        </section>
    )
}