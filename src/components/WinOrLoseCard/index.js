// Write your code here.
import './index.css'

const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? wonImage : lossImage
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const gameStatus = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="win-or-loss-card">
      <div className="details">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>

        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="image" />
      </div>
    </div>
  )
}
export default WinOrLossCard
