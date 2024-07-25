import './index.css'

const NavBar = props => {
  const {score, topScore, gameRes} = props
  return (
    <div className="nav-header">
      <div className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-icon"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {gameRes ? (
        <div className="score-container">
          <p className="score-para">Score: {score}</p>
          <p className="score-para">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
