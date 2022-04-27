import logo from './logo.svg';
import './App.css';
import './views/CoktailSearch';
import CoktailSearch from './views/CoktailSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Metele que son cocteles!
        </h1>
        <CoktailSearch/>
      </header>
    </div>
  );
}

export default App;
