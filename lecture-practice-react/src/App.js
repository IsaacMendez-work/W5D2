import logo from './logo.svg';
import './App.css';
import ClassComp from './practicingComponents/ClassComp';
import FuncComp from './practicingComponents/FunctionalComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a practice paragraph I'm making in src/App.js that is using HTML-style formatting. 
        </p>
        <p>
          To start live server, use the terminal and type: npm start
          </p>
        <p>
          Once live, click on the terminal and click Ctrl-C to end the live function.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <ClassComp />
        </div>
        <div>
          <FuncComp />
        </div>
      </header>
    </div>
  );
}

export default App;