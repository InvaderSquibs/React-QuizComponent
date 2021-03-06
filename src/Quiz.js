import React, { Component } from 'react'
import QuizEnd from './QuizEnd'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }

    }

  showNextQuestion() {
    this.setState(state => {
      return {
        quiz_position: state.quiz_position + 1
      }
    })
  }

  handleResetClick() {
    this.setState(state => {
      return {
        quiz_position: 1
      }
    })
  }

  render() {
      const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length

      return isQuizEnd
      ? (
          <div>
            <div className='QuizQuestion'>
              <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
            </div>
          </div>
        )
      : (
        <div>
          <div className='QuizQuestion'>
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
          </div>
        </div>
      )
    }
}

export default Quiz
