
import {useTheme } from "../../../../Utils/DarkMode";
import { useSelector } from "react-redux";
const Nav = ()=>{
    const wishCount=useSelector(store=>store.wishlist)
    const {theme, toogleFunc}=useTheme();

    return (
        <>
        <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}      >
            <div className="container-fluid mt-2">
                <a className="navbar-brand" href="/dashboard">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/dashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dashboard" >Action</a></li>
                        <li><a className="dropdown-item"  href="/dashboard" >Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="/dashboard">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link position-relative" aria-disabled="true" href="/dashboard">Wishlist
                        
                        {(wishCount.length>0) &&
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {wishCount.length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        }
                    </a>
                    </li>
                </ul>
                <div class="form-check form-switch me-5">
                    <input className="form-check-input" name ="dark-mode" type="checkbox" id="flexSwitchCheckDefault" checked={theme === "dark"} onChange={toogleFunc}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        </>

    )
}
export default Nav;