import ChuckNorrisSearch from "./components/chuckNorrisSearch/ChuckNorrisSearch"
import "./App.css";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <p>Chuck Norris Jokes</p>
        <ChuckNorrisSearch />
        <Button />
      </header>
    </div>
  );
}

export default App;
