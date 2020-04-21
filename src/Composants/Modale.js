import React from "react";
import "./Modale.css";

export default function Modale(props) {
  return (
    <div onClick={props.closeFunc} className="overlay">
      <div onClick={props.stopPropa} className="contenu">
        <h1>Contenu Modale</h1>
        <button className="btnClose" onClick={props.closeFunc}>
          Fermer
        </button>
      </div>
    </div>
  );
}
