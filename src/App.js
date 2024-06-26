import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>W1D1- Pratica</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Quiz />
    </>
  );
}

export default App;
