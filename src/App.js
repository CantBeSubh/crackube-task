import { useState } from "react";
import Articles from "./Components/Articles";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('All')
  const [layout, setLayout] = useState('Grid')

  return (
    <div className="App">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} layout={layout} setLayout={setLayout} />
      <Articles search={search} tag={tag} setTag={setTag} layout={layout} />
    </div>
  );
}

export default App;
