import React from 'react';
import './Footer.css';

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
                    <li><a href="/sitemap/" tooltip="Карта сайту">Карта сайту</a></li>
                    <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/contact/" tooltip="Контакты">Контакти</a></li>
                    <li><a href="/d">Гарантії</a></li>
                    <li><a href="/s">Про сервіс</a></li>
                    <li><a href="/o">Умови повернення</a></li>
                    <li><a href="/p">Угода про використання сервісу</a></li>
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