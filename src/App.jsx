import React from "react";
import Maps from "./components/Maps";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  return (
    <div className="App">
      <SearchAppBar />
      <Maps />
    </div>
  );
};

export default App;
