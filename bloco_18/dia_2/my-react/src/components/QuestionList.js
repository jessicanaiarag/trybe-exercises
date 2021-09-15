import React, { useContext } from 'react';
import QuestionContext from '../context/QuestionContext';

import QuestionCard from './components/QuestionCard';

function QuestionList() {
    const { questions } = useContext(QuestionContext);

    return (
        <section>
            {questions.map((question, index) => (
                <QuestionCard key={index} question={ question } />))}
        </section>
    );
}

export default QuestionList;