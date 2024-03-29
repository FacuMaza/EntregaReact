import React, {useContext} from 'react'
import Nike from "../../../public/images/Nike.jpg"
import { Link } from "react-router-dom";
import { DataContext } from "../../Contex/Dataprovier";

export const Header = () => {

  const value= useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito] = value.carrito

  const toogleMenu = () =>{
    setMenu(!menu)
  }


  return (
    
       <header>
      
          <Link to="/">
            <div className="logo">
              <img src={Nike} alt="logo" width="150" />
            </div>
          </Link>


          <ul>
            <li>
              <Link to="/">Inicio</Link>
              
            </li>
            <li>
              <Link to="/productos">Productos</Link>

            </li>
          </ul>

        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className='item__total'>{carrito.length}</span>
        </div>
        
       </header>

  )
}
