import { useContext } from 'react';
import { GlobalContext } from '../state/globalContext';
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing a cart icon

function Navbar() {
  const { user, cart } = useContext(GlobalContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-label="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog" aria-label="Catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" aria-label="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" aria-label="Admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" aria-label="Contact">Contact</Link>
            </li>
            {user.name ? (
              <label>{user.name}</label>
            ) : (
              <Link className="nav-link" to="/login" aria-label="Login">Login</Link>
            )}
          </ul>
        </div>
        <div className="cart-icon">
          <Link to="/cart" aria-label="Cart">
            <FaShoppingCart />
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;