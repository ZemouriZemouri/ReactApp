import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<img //src="../movirlogo.jpg" 
		/>
		
        <p>
          == Demo React App ==
        </p>
        <a
          className="App-link"
          href="https://mijnmovir.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mijn Movir
        </a>
      </header>
    </div>
  );
}

export default App;
