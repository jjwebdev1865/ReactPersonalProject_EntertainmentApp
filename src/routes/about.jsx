import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export default function About() {
    return(
        <div>
            <Header />
            <NavBar />
            <h2 style={{textAlign: 'center'}}>About the site!</h2>
            <br />
            <h2 style={{textAlign: 'center'}}>Books Page</h2>
            <hr style={{width: '66%'}} />
            <p style={{textAlign: 'center'}}>
                This page is pulling from a json file and *currently in progress* is dynamically keeping it up to date with reviews and additions. <br />
                This page is using the standard state object and not the UseState library provided by react. <br />
            </p>
        </div>
    );
}