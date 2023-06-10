import logo from './tesla.png';
import './App.css';


function Menu() {
  return (
    <header>
        <nav className='nav'>
            
            <a href='#'> <img src={logo} className='logo'/> </a>

        <div className='middle-buttons'>
            <ul className='nav-items'>
                <li>
                    <a href='#'>X1</a>
                </li>
                <li>
                    <a href='#'>X2</a>
                </li>
                <li>
                    <a href='#'>X3</a>
                </li>
                <li>
                    <a href='#'>X4</a>
                </li>
            </ul>
        </div>
        </nav>
    </header>
  );
}

export default Menu;
