import logo from './tesla.png';
import './App.css';


function Menu() {
  return (
    <div className='menu'>

        <a  href='#'>
            <img src={logo} className='logo'/> 
        </a>

        <div className='nav__link'>
            <ul >
            <a href='#'><li> Strona główna </li></a> 
            <a href='#'><li> Produkty  </li></a> 
            
            <a href='#'><li> O nas </li></a>
            <a href='#'><li> Kontakt </li></a> 
            </ul>
        </div>
        <button> Menu </button>
    </div>
  );
}

export default Menu;
