import React from 'react';
import { Textbox } from './components/Textbox.js'
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{ Textbox() }</p>
      </header>
    </div>
  );
}

export default App;
