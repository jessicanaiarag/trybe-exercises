import React, { useState } from 'react';
import getQuestions from './QuestionContext'
import QuestionContext from './QuestionContext';

function QuestionsProvider({ children }) {
  //é uma função que retorna um array //[state, setter]
  const [questions, setQuestion] =  useState([]);
  const [isLoading, setIsLoading] =  useState(false);

  //setar o loading true
  //fazer a chamada da api
  //guardar os dados da api
  //setar loading false

  async function fatchQuestion() {
    setIsLoading(true);
    const questionAPI = await getQuestions();
    setQuestion(questionAPI);
    setIsLoading(false);
  } 

  return (
    <QuestionContext.Provider value={ { questions, isLoading, fetchQuestion } }>
      { children }
    </QuestionContext.Provider>
  );
}

export default QuestionsProvider;

// this.state = {
//   question: [],
//   isLoading: false,
// }

// this.setState({question: valor})