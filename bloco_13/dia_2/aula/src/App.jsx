import './App.css';
import { BrowserRouter } from 'react-router-dom'
import TrybeSite from './TrybeSite';

function App() {
  return (
    <div>
      <BrowserRouter>
        <TrybeSite />
      </BrowserRouter>
    </div>

  );
}

export default App;
