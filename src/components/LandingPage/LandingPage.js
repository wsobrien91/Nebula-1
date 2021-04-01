import React from 'react';
import './LandingPage.css';

function LandingPage(){
    return(
        <>
        <meta name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0' ></meta>
     <link rel="stylesheet" href="https://use.typekit.net/pbx2obo.css"></link>
        <div className="body">
            <h1>Nebula</h1>
            <img src="../../pics/SpaceMan1.svg" alt="space man" width="500" height="600"/>
        </div>
        </>
    );
}

export default LandingPage