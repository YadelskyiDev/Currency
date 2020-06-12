import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Rate } from '../Rate/Rate';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Guarantees } from '../Guarantees/Guarantees';
import { Service } from '../Service/Service';
import { TermsReturn } from '../TermsReturn/TermsReturn';
import { Agreement } from '../Agreement/Agreement';
import { SiteMap } from '../SiteMap/SiteMap';
import { Error404 } from '../Error404/Error404';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
 
export class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Rate} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/guarantees" component={Guarantees} />
                                <Route exact path="/service" component={Service} />
                                <Route exact path="/termsReturn" component={TermsReturn} />
                                <Route exact path="/agreement" component={Agreement} />
                                <Route exact path="/siteMap" component={SiteMap} />
                                <Route component={Error404} />
                            </Switch>
                        </Router> 
                    </main>
                </div>
               <Footer/>
            </div>
        );
    }
}