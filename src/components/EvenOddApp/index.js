// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  incrementRandomValue = () => {
    const randomNum = Math.floor(Math.random() * 100)
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + randomNum,
    }))
  }

  render() {
    const {randomNumber} = this.state
    const isEven = randomNumber % 2 === 0
    const OddOrEvenValue = isEven ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1>
            Count <span>{randomNumber}</span>
          </h1>
          <p className="para1">Count is {OddOrEvenValue}</p>
          <button className="btn" onClick={this.incrementRandomValue}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
