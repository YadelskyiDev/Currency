import React from 'react';
import './Nav.css';

export class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {/* <li><a href="#">Головна</a></li>
                            <li><a href="#">Пункти обміну</a></li>
                            <li><a href="#">Контакти</a></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}