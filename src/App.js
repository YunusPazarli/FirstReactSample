import logo from './logo.svg';
import './App.css';
import Buyukharfolmali from './components/Buyukharfolmali';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Henloo <code>src/App.js</code> and save to reload.
        </p>
        <p>Pazarlı</p>
        <ul>
          
            Yunus
         <li>pazy</li>
        </ul>
        <Buyukharfolmali></Buyukharfolmali>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
