import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <h1 style={{ padding: '15px', backgroundColor: "#222", color: "#FFF" }}>Todos</h1>
            </div>
        )
    }
}

export default Header