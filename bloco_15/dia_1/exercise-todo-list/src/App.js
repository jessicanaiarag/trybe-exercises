import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      itemSelecionado: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selecionaItem = this.selecionaItem.bind(this);
    this.removeItemSelecionado = this.removeItemSelecionado.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selecionaItem(itenIndex) {
    this.setState({ itemSelecionado: itenIndex })
  }

  removeItemSelecionado() {
    const { listTodo, itemSelecionado } = this.state;
    const copyListTodo = [...listTodo];
    copyListTodo.splice(itemSelecionado, 1);
    this.setState({ listTodo: copyListTodo, itemSelecionado: null });
  }

  render() {
    const { listTodo, itemSelecionado } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}
                  style={{
                    color: index === itemSelecionado ? 'red' : 'blue',
                    cursor: 'pointer'
                  }}
                  onClick={() => this.selecionaItem(index)}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
        <input id="remove" type="button"
          value="Remover" data-testid="id-remove"
          disabled={itemSelecionado != null ? false : true} 
          onClick={this.removeItemSelecionado}
          />
      </div>
    );
  }
}
export default App;
