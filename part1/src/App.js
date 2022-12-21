import Mensaje from './Mensaje';
import './App.css';

const Description = (params) =>{
  return <p style={{color:params.color}}>Esta es la descripcion del curso de React</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="blue" message="Gerardo" age={22}/>
      <Mensaje color="red" message="Luciana" age={29}/>
      <Description color="green"/>
    </div>
  );
}

export default App;
