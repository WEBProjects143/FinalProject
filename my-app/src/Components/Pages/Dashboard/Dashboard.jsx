import { Outlet } from "react-router";
import Nav from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
const Dash=()=>{
    return(
        <>
            <Nav/>
               {/* Hero Section */}
                <div className="bg-light text-center py-5">
                    <div className="container">
                    <h1 className="display-4">Welcome to MyApp</h1>
                    <p className="lead">The best solution for your needs, powered by React & Firebase.</p>
                    <a href="/signup" className="btn btn-primary btn-lg mt-3">Get Started</a>
                    </div>
                </div>

                {/* Features Section */}
                <div className="container my-5">
                    <h2 className="text-center mb-4">Features</h2>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Fast Performance</h5>
                            <p className="card-text">Optimized for speed with React and Firebase backend.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Secure Data</h5>
                            <p className="card-text">Your data is protected with Firebase Auth & Firestore Rules.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">User Friendly</h5>
                            <p className="card-text">Simple and intuitive UI built with Bootstrap components.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Cards Section */}
                <div className="bg-light text-center py-5">
                    <div className="container">
                    <Cards/>
                    </div>
                </div>
            <Outlet/>
        </>
    )
}
export default Dash;