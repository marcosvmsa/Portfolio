import React from 'react';
import {Email, GitHub, Instagram, LinkedIn} from "@material-ui/icons";


function Footer() {
    return (
        <div className={'footer'}>
            <div>
                <GitHub  />
                <Instagram />
                <LinkedIn />
                <Email />
            </div>
            <p> &copy;MarcosProduction  </p>
        </div>
    );
}

export default Footer;