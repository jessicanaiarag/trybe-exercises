import './App.css';
import pokemons from './data'
import Pokemon from './Pokemon';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokedex">
        {pokemons.map((pokemon) => <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          averageWeight={pokemon.averageWeight.value + ' ' + pokemon.averageWeight.measurementUnit}
          image={pokemon.image}
          moreInfo={pokemon.moreInfo}
        />)
        }
      </div>
    </div>
  );
}

export default App;
