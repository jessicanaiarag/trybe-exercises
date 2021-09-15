import data from './questionData';

const ONE_SECOND = 1000;

export const getQuestions = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const questions = readQuestions();
      resolve(questions);
    }, ONE_SECOND);
  })
);

export const archiveQuestion = (archive) => {
  const questions = readQuestions().map((question) => {
    if (question.id === parseInt(question.id, 10)) {
      return { ...question, archive };
    }
    return question;
  });
  saveQuestions(questions);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, ONE_SECOND);
  });
};


export const createQuestion = (questionData) => {
  let questions = readQuestions();
  const nextId = questions[questions.length -1].id + 1;
  const neWQuestion = {...questionData, id: nextId };
  questions = [...questions, neWQuestion];
  saveQuestions(questions);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 100);
  });
};