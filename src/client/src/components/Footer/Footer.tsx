import React from 'react';

import './Footer.css';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="footer_ctn">
            <span>&#169; Drafts 2020. All rights reserved.</span>
            <a href="#">Privacy</a>
            <a href="#">Legal</a>
            <a href="#">Support</a>
        </footer>
    )
}