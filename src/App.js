import { useState } from "react";
import Articles from "./Components/Articles";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('All')
  return (
    <div className="App">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <Articles search={search} tag={tag} setTag={setTag} />
    </div>
  );
}

export default App;
