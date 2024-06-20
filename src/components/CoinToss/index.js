// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, toss: 0}
  tossing = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({
      toss: tossResult,
    })
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
    if (this.state.toss === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else if (this.state.toss === 1) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }
  }
  render() {
    const {total, heads, tails, toss} = this.state
    const imgCoin =
      toss % 2 === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="home">
        <div className="small-box">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imgCoin} className="img-style" alt="toss result" />
          <button onClick={this.tossing} className="btn" type="button">
            Toss Coin
          </button>
          <div className="sub-box">
            <p className="sub-para">Total: {total}</p>
            <p className="sub-para">Heads: {heads}</p>
            <p className="sub-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
