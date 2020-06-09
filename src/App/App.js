import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Rate } from '../Rate/Rate';


 
export class App extends React.Component {
    // constructor(props){
    //   super(props);
    // }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <main>
                       <Rate/> 
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">На нашому сайти ми використовуємо cookie для збору інформації технічного характеру.<br />Зокрема,
                  для персоніфіцированої работи сайту ми обробляємо IP-адресу регіону вашого
            місця розташування.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
                    </div>
                </div>
               <Footer/>
            </div>
        );
    }
}