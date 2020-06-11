import React from 'react';
import './Rate.css';
import { Calc } from '../Calc/Calc';

export class Rate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      currencyRate: {},
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        const { currency } = this;
        let result = {};
        for (let i = 0; i < currency.length; i++) {
          result[currency[i]] = data.rates[currency[i]];
        }
        this.setState({ currencyRate: result, date: data.date });
      })
  }

  componentDidMount() {
    this.getRate();
  }

  render() {
    const { date, currencyRate } = this.state;

    return (
      <div className="rate">
        <h3> Курс валют на {date}</h3>
        <div className="flex-container">
          {Object.keys(currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{currencyRate[keyName].toFixed(2)}</div>
              <p>*Можна купити за 1 EUR</p>
            </div>
          )
          )}
        </div>
        <Calc rate={currencyRate}/>
      </div>
    );
  }
}