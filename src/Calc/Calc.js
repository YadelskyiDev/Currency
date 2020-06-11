import React from 'react';

export class Calc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
    }
  }

  static getDerivedStateFromProps(props){
    return { rate: props.rate };
  }

  calcRate = e =>{
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency])})
  }

  render() {
    const { rate, result } = this.state;
    return (
      <div>
        <h3>Калькулятор обміну</h3>
        <div className="block">
          <div>Я хочу</div>

          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency"/>
              <select name="type-currency" id="">
                {Object.keys(rate).map(keyName =>
                  (
                    <option key={keyName} value={keyName}>{keyName}</option>
                  )
                )}
              </select>
              <input type="submit" defaultValue="calc"/>
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {result.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}