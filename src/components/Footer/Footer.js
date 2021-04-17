import React from "react";
import { Owoki } from "../../../src/icons/icons";

const Footer = () => (
    <footer className="footer">
        <div className="footer-text-wrapper">
            <p>
                L2index is a collectively built hub for indexingscaling solutions for Ethereum. Everyone is welcome to collaborate, currently via the <a className="docs-link">docs</a>.
             </p>
            <p>
                Bootstrapped by <a className="docs-link">@owoki</a> via <a>raidguild.org</a>.
            </p>
        </div>
        <div className="footer-logo-wrapper">
            <Owoki />
        </div>
    </footer>
)

export default Footer;
