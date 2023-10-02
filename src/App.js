import "./App.css";
import Home from "./pages/Home";
import background from "./assets/images/movie-details-bg.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Home />
    </div>
  );
}

export default App;
