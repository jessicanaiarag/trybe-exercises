import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Cadastro Pessoa Estudante"
        subtitle="Bemvindo turma 13"
      />
      <Form />
    </div>
  );
}

export default App;
