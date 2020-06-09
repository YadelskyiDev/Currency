import React from 'react';
import './Rate.css';

export class Rate extends React.Component{
  render(){
    return (
      <div className="rate">
        <h3> Курс валют на </h3>
        <div className="flex-container">
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
          <div className="block flex-item">
            <div className="currency-name">USD</div>
            <div className="currency-in">1500 Kr</div>
            <div className="currency-out">1200 Kr</div>
          </div>
        </div>
        <h3> Калькулятор обміну</h3>
        <div className="block">
          <div>Я хочу</div>
          <div><label><input type="radio" name="radio" defaultValue="0" />Купити</label></div>
          <div><label><input type="radio" name="radio" defaultValue="1" />Продати</label></div>
          <div>
            <input type="number" defaultValue="150" />
            <select name="" id="">
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR 150</li>
              <li>EUR 150</li>
              <li>EUR 150</li>
              <li>EUR 150</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}