import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        let { toggel, mode } = this.props
        return (
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={toggel} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: mode === 'dark' ? 'white' : 'black' }} >Enable DarkMode</label>
                            </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
// 
// style={{ color: props.mode === 'dark' ? 'white' : 'black' }}