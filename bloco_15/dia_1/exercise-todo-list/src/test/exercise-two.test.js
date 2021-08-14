import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
    test('Testando a adição de vários itens a aplicação', () => {
        const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
        const { getByLabelText, queryByText, getByText } = render(<App />);
        // Caso precise de uma nova query adicione no object destructuring
        const buttonAdd = getByText(/adicionar/i);
        const inputTask = getByLabelText('Tarefa:');

        for (let index = 0; index < listTodo.length; index += 1) {
            const TASK = listTodo[index];
            fireEvent.change(inputTask, { target: { value: TASK } });
            fireEvent.click(buttonAdd);
        }

        expect(inputTask).toHaveValue('');

        for (let index = 0; index < listTodo.length; index += 1) {
            const TASK = listTodo[index];
            const taskList = queryByText(TASK)
            expect(taskList).toHaveTextContent(TASK);
        }
    })
});

describe('Teste do componente Item', () => {
    test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
        const itemText = 'item1';
        const { getByText } = render(<Item content={itemText}/>);
        const htmlElement = getByText(itemText)
        expect(htmlElement).toHaveTextContent(itemText);
    })
})