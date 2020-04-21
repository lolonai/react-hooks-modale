import React, { useState } from "react";
import "./App.css";
import Modale from "./Composants/Modale";

function App() {
  const [toggleModale, setToggleModale] = useState(false);

  const closeModale = () => {
    setToggleModale(false);
  };

  const stopPropa = (e) => {
    e.stopPropagation();
  };

  const openModale = () => {
    setToggleModale(true);
  };

  let myModale = "";

  if (toggleModale) {
    myModale = <Modale closeFunc={closeModale} stopPropa={stopPropa} />;
  } else {
    myModale = "";
  }

  return (
    <div className="App">
      <button onClick={openModale}>ouvrir la modale</button>
      {myModale}
    </div>
  );
}

export default App;
