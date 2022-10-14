import React from 'react';
import {Email, GitHub, Instagram, LinkedIn} from "@material-ui/icons";

function Home() {
    return (
        <div className={'home'}>
            <div className={'about'}>
                <h2> Eu sou Marcos </h2>
                <div>
                    <GitHub  />
                    <Instagram />
                    <LinkedIn />
                    <Email />
                </div>
            </div>

            <div className={'skills'}>

            </div>
        </div>
    );
}

export default Home;
