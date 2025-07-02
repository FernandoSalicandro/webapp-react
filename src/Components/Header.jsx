import { useState } from "react"
import { NavLink } from "react-router-dom"
import axios from 'axios'

export default function Header() {

    const headerLinks = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Movies',
            url: '/movies'
        },
        {
            title: 'Aggiungi Film',
            url: '/create-movie'
        }
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme='dark'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">

                            {headerLinks.map((curLink, index) => {
                                return (
                                     <li key={index} className="nav-item">
                                <NavLink className="nav-link" to={curLink.url}>
                                    {curLink.title}
                                </NavLink>
                               </li>
                                )
                            })}


                        </ul>

                       
                    </div>
                </div>
            </nav>
        </>
    )
}