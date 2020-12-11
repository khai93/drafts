import React from 'react';

import './Plans.css';

export interface PlansProps {

}

export const Plans: React.FC<PlansProps> = (props: PlansProps) => {
    return (
        <section className="plans__ctn">
            <h2>PLANS & PRICING</h2>
            <h5>AFFORDABLE FOR EVERYONE</h5>
            <div className="plans_pricing_ctn">
                <div>
                    <h1>BASIC</h1>
                    <span className="plans_pricing_price">
                        <h1>$0.00</h1>
                        /month
                    </span>
                    <span className="plans_pricing_text">
                        FREE FOREVER
                    </span>
                    <ul>
                        <li>Take Notes</li>
                        <li>Shareable notes link</li>
                        <li>100 Notes</li>
                        <li>25MB maximum note size</li>
                    </ul>
                    <button>SIGN UP FOR FREE</button>
                </div>
            </div>
            <div className="plans_pricing_ctn">
                <div>
                    <h1>PREMIUM</h1>
                    <span className="plans_pricing_price">
                        <h1>$10.00</h1>
                        /month
                    </span>
                    <span className="plans_pricing_text">
                        ADVANCED USERS
                    </span>
                    <ul>
                        <li>Take Notes</li>
                        <li>Shareable notes link</li>
                        <li>Unlimited Notes</li>
                        <li>100MB maximum note size</li>
                    </ul>
                    <button>SIGN UP FOR FREE</button>
                </div>
            </div>
        </section>
    )
}