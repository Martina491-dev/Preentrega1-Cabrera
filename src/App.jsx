 import "./App.css"
import Card from "./componentes/Card"


function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      <div className="container">
        <Card title="Titulo" 
        description="la descripcion"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>
  )
   

}



export default App 
