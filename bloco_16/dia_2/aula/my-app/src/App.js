import { Provider } from 'react-redux';
import './App.css';
import Title from './Componentes/Title';
import List from './Componentes/List';
import Todo from './Componentes/Todo'
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Title />
        <Todo />
        <List />
      </Provider>
    </div >
  );
}

export default App;
