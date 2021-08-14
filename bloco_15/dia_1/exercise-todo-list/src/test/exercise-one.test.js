import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const buttonAdd = getByText(/adicionar/i);
    expect(buttonAdd.type).toBe('button');
    expect(buttonAdd).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText, getByText} = render(<App />);

    const TASK = 'task1';
  
    const buttonAdd = getByText(/adicionar/i);
    const inputTask = getByLabelText('Tarefa:');
    
    fireEvent.change(inputTask, { target: { value: TASK } });
    fireEvent.click(buttonAdd);
    expect(inputTask).toHaveValue('');
    
    const taskList = queryByText(TASK)
    expect(taskList).toHaveTextContent(TASK);
  });
});
