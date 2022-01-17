// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isClick: false}

  onClickImage = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {faqDetails} = this.props
    const {isClick} = this.state
    const {id, questionText, answerText} = faqDetails

    const imageUrl = isClick
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const altText = isClick ? 'minus' : 'plus'
    return (
      <li className="list-item-style">
        <div className="question-container">
          <h1 className="question_style">{questionText}</h1>
          <img
            className="image"
            src={imageUrl}
            alt={altText}
            onClick={this.onClickImage}
          />
        </div>
        {isClick ? (
          <>
            <hr />
            <p className="answer">{answerText}</p>
          </>
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default FaqItem
