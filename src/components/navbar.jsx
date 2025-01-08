import './styles/navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Project title</a>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/catalog">Catalog</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            
                            <form className="search-bar" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;