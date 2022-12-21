import Mensaje from './Mensaje';
import './App.css';

const Description = (params) =>{
  return <p style={{color:params.color}}>Esta es la descripcion del curso de React</p>
}
const Luu = (params)=>{
  return <p>Luciana, eres mi todo uwu</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="blue" message="Gerardo" age={22}/>
      <Mensaje color="red" message="Luciana" age={29}/>
      <Description color="green"/>
      <Luu/>
    </div>
  );
}

export default App;
