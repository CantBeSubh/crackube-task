import Articles from "./Components/Articles";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Articles />
    </div>
  );
}

export default App;
