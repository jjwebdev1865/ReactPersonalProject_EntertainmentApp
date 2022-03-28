import React from 'react';
import '../static/navbar.css';
import {Link, Outlet} from 'react-router-dom'

export default class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <Link className='link-item' to="/" >Home</Link> |{" "}
                        <Link className='link-item' to="/movies">Movies</Link> |{" "}
                        <Link className='link-item' to="/shows">TV Shows</Link> |{" "}
                        <Link className='link-item' to="/books">Books</Link>  
                    </ul>
                </nav>
                <hr />
            </div>
        )
    }
}