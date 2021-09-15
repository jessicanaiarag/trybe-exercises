import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionListPage from './pages/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage';
import Header from './components/Header';

import './App.css';
import QuestionsProvider from './context/QuestionProvider';

class App extends React.Component {
  render() {
    return (
      <QuestionsProvider>
        <main className="App">
          <Header />
          <section className="main-section">
            <switch>
              <Route
                path="/new-question"
                component={NewQuestionPage}
              />
              <Route
                exact
                path="/"
                component={QuestionListPage}
              />
            </switch>
          </section>
        </main>
      </QuestionsProvider>
    )
  }
}

export default App;
