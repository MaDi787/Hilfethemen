import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, toggleShowInfo }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleShowInfo={toggleShowInfo}
            activeId={activeId}
          />
        )
      })}
    </section>
  )
}

export default Questions
