import React, { useEffect, useState } from 'react';
import useProducts from './hooks/useProducts';

function App() {
  //useState restorna um estado a função para alterar o estado.
  //categories é o estado e ele começa como uma lista vazia.
  const [categories, setCategories] = useState([]);
  const [products, setSelectedCategory] = useState([]);
 
  /**carregaquando inicia a aplicação didMount */
  useEffect(() => {
    const getCategories = async () => {
      const endpoint = 'http://api.mercadolibre.com/sites/MBL/categories';
      const result = await fetch(endpoint).then((response) => response.json());
      setCategories(result);
    };

    getCategories();
  }, [])



  const handleChangeSelectedCategory = ({ target: { id } }) => {
    setSelectedCategory(id);
  }

  return (
    <div className="App">
      <h1>Wolfi-EXPRESS</h1>
      <ul>
        {
          categories.map(({ id, name }) => <li key={id} id={id}
            onClick={handleChangeSelectedCategory}>{name}</li>)
        }
      </ul>
      <ul>
        {
          products.map(item => <li>{item.title}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
