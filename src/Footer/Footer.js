import React from 'react';
import './Footer.css';

import { HashRouter as Router, NavLink } from 'react-router-dom';
import { footerNav } from './footerNav';

export class Footer extends React.Component{
  render(){
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">2020 &copy; React currency</h1>
                <p>All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <Router>
                      {Object.keys(footerNav).filter(item => item === 'googleSitemap' || item === 'sitemap').map(item => {
                        return <li key={item}><NavLink to={`/${item}`} tooltip={footerNav[item]}>{footerNav[item]}</NavLink></li>
                      })}
                    </Router>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <Router>
                      {Object.keys(footerNav).filter(item => item !== 'googleSitemap' && item !== 'sitemap').map(item => {
                        return <li key={item}><NavLink to={`/${item}`} tooltip={footerNav[item]}>{footerNav[item]}</NavLink></li>
                      })}
                    </Router>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}