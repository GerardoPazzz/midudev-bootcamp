import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter =({number}) => {
  return <h1>{number}</h1>;
  };


const App = (props) => {
  const [contador, setContador] = useState(0); //devuelve un array[1]
  
  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleClickReset = () => {
    setContador(0);
  }

  const isEven = contador %  2 === 0

  const mensajePar = isEven?"Es par": "Es impar"; 
  
  return (
    <div>
      <p>El valor del contador es: </p>
      <Counter number={contador}/>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Aumentar</button>
      <button onClick={handleClickReset}>Resetear</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
