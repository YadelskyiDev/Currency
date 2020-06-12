import React from 'react';
import './Nav.css';

import { HashRouter as Router, NavLink } from 'react-router-dom';
import { navArr } from './NavigationArr';

export class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            <Router>
                                {Object.keys(navArr).map(item => {
                                    if (item === 'main') {
                                        return <li key={item}><NavLink to='/' tooltip={navArr[item]}>{navArr[item]}</NavLink></li>
                                    } else {
                                        return <li key={item}><NavLink to={`/${item}`} tooltip={navArr[item]}>{navArr[item]}</NavLink></li>
                                    }
                                })}
                            </Router>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}