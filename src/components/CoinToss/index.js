import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headImageUrl, headsCount: 0, tailsCount: 0}

  onClickBtn = () => {
    const {headsCount, tailsCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''

    let latestHeadsCount = headsCount

    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = headImageUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailImageUrl
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state

    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heaing">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>

          <img
            src={tossResultImage}
            alt=" toss result"
            className="img-styles"
          />

          <div>
            <button
              type="button"
              onClick={this.onClickBtn}
              className="btn-styles"
            >
              Toss Coin
            </button>
            <div className="bottom-container">
              <p className="result">Total: {totalCount}</p>
              <p className="result">Heads: {headsCount}</p>
              <p className="result">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
