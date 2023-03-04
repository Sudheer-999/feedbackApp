import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onHappyClick = () => {
    this.setState({isClicked: false})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="main-head">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-con">
          {emojis.map(eachItem => (
            <li
              key={eachItem.id}
              className="list-items"
              onClick={this.onHappyClick}
            >
              <img
                src={eachItem.imageUrl}
                alt={eachItem.name}
                className="emoji"
              />
              <p className="emoji-name">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccess = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="tnq-con">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="tnq">Thank You!</h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <div className="card-con">
          {isClicked ? this.renderFeedbackQuestion() : this.renderSuccess()}
        </div>
      </div>
    )
  }
}

export default Feedback
