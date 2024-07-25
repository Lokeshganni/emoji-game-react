import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const winOrLossObjList = [
  {
    gameResStatus: 'Won',
    gameResUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
  },
  {
    gameResStatus: 'Lose',
    gameResUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
  },
]

class EmojiGame extends Component {
  state = {topScore: 0, clickedIdList: [], gameRes: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  endGame = len => {
    const {topScore} = this.state
    const score = len > topScore ? len : topScore
    this.setState({
      gameRes: false,
      topScore: score,
    })
  }

  onClickEmoji = id => {
    const {clickedIdList} = this.state
    if (!clickedIdList.includes(id)) {
      this.setState(prevState => ({
        clickedIdList: [...prevState.clickedIdList, id],
      }))
      if (clickedIdList.length === 11) {
        this.endGame(clickedIdList.length + 1)
      }
    } else {
      this.endGame(clickedIdList.length)
    }
  }

  onClickPlayAgain = () => {
    this.setState({gameRes: true, clickedIdList: []})
  }

  render() {
    const {topScore, gameRes, clickedIdList} = this.state
    const presentScore = clickedIdList.length
    const resObj =
      clickedIdList.length === 12 ? winOrLossObjList[0] : winOrLossObjList[1]
    return (
      <div className="main-container">
        <NavBar
          gameRes={gameRes}
          score={clickedIdList.length}
          topScore={topScore}
        />
        {gameRes ? (
          <div className="div-for-ul">
            <ul>
              {this.shuffledEmojisList().map(each => (
                <EmojiCard
                  onClickEmoji={this.onClickEmoji}
                  key={each.id}
                  obj={each}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="div-for-ul">
            <WinOrLoseCard
              onClickPlayAgain={this.onClickPlayAgain}
              resObj={resObj}
              score={presentScore}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
