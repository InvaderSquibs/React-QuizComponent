import React, { Component } from 'react'
import QuizQuestions from './QuizQuestions.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }

    render() {
        return (
            <div>
                <div className='QuizQuestion'>
                    <QuizQuestions quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} />
                </div>
            </div>
        )
    }
}

export default Quiz
