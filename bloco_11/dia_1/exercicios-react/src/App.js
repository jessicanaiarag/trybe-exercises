import logo from './logo.svg';
import './App.css';

const Task = (props) => {
  return (
    <li>{props.value}</li>
  );
}

function App() {
  const tarefas = ['limpar', 'lavar', 'passar'];

  return (
    <ol>
      {tarefas.map((tarefa) => <Task value={tarefa} />)}
    </ol>
  );
}

export default App;
