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
                <li> <a href='#'> MENU </a> </li>
                <li> <a href='#'> MENU </a> </li>
                <li> <a href='#'> MENU </a> </li>
                <li> <a href='#'> MENU </a> </li>
            </ul>
        </div>
        <button>MENU</button>
    </div>
  );
}

export default Menu;
