import React from 'react';
import './Rate.css';

export class Rate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date : '',
      currencyRate : {},
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
  }

  getRate = ()=>{
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data =>{
        return data.json();
      })
      .then(data =>{
        this.setState({ date : data.date});
        let result = {};
        for(let i = 0; i < this.currency.length; i++){
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({currencyRate: result});
      })
  }

  componentDidMount() {
    this.getRate();
  }
  
  render(){
    const { date, currencyRate } = this.state;
    return (
      <div className="rate">
        <h3> Курс валют на {date}</h3>
        <div className="flex-container">
          {Object.keys(currencyRate).map((keyName, i)=> (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{currencyRate[keyName].toFixed(2)}</div>
              <p>*Можна купити за 1 EUR</p>
            </div>
          )
          )}
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