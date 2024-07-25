import './index.css'

const WinOrLoseCard = props => {
  const {resObj, score, onClickPlayAgain} = props
  const {gameResStatus, gameResUrl} = resObj
  return (
    <div className="win-or-loss-container">
      <img src={gameResUrl} alt="win or lose" className="win-or-loss-img" />
      <div className="win-or-loss-content-container">
        <h1 className="res-txt">You {gameResStatus}</h1>
        <p className="score-txt-para">
          {gameResStatus === 'Won' ? 'Best Score' : 'Score'}
        </p>
        <p className="score-num-para">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={() => onClickPlayAgain()}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
