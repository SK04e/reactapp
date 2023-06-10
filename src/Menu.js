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
            <a href='#'><li>  MENU </li></a> 
            <a href='#'><li>  MENU </li></a> 
            <a href='#'><li>  MENU </li></a> 
            <a href='#'><li>  MENU </li></a>
            <a href='#'><li>  MENU </li></a> 
            </ul>
        </div>
        <button>KONTAKT</button>
    </div>
  );
}

export default Menu;
