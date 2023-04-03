import React from "react"
import { Header } from "./Componentes/Header"
import 'boxicons'
import { BrowserRouter as Routes } from "react-router-dom";
import { Paginas } from "./Componentes/Paginas";
import { DataProvider } from "./Contex/Dataprovier";
import { Carrito } from "./Componentes/Carrito";


function App() {

  return (

  <DataProvider>
   <div className="App"> 

      <Routes>
      <Carrito/>
      <Header/>
      
      <Paginas/>

      </Routes>



    </div>
  </DataProvider>

    
    
  )
}

export default App
