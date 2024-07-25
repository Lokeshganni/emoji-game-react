import './index.css'

const EmojiCard = ({obj, onClickEmoji}) => {
  const {emojiUrl, emojiName, id} = obj

  return (
    <li>
      <button
        type="button"
        className="emoji-card-container"
        onClick={() => onClickEmoji(id)}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
