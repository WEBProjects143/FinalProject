import React,{useReducer} from "react";
import { Outlet } from "react-router";
import Nav from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import {filterfunction,initialState} from "../../../Utils/UseReducer";



const Dash=()=>{

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 59.99,
            category: "Electronics",
            image: "https://www.bbassets.com/media/uploads/p/l/40329884_10-sony-wh-ch720-bluetooth-headphone-with-mic-dual-noise-sensor-technology-over-ear-black.jpg",
            inStock: true
        },
        {
            id: 2,
            name: "Bluetooth Speaker",
            price: 29.99,
            category: "Electronics",
            image: "https://m.media-amazon.com/images/I/41yQZFhJ-dL._SY300_SX300_QL70_FMwebp_.jpg",
            inStock: false
        },
        {
            id: 3,
            name: "Cotton T-Shirt",
    price: 14.99,
    category: "Clothing",
    image: "https://unstd.shop/cdn/shop/files/SAGE-GREEN-2.jpg?v=1734507963&width=600",
    inStock: true
}

];
const [state,dispatch]=useReducer(filterfunction ,{
    ...initialState,
    products:products,
    filterProducts:products
})


const handleClick=(value)=>{
    dispatch({type:value})
}

    return(
        <>
            <Nav/>
               {/* Hero Section */}
                <div className=" text-center py-5">
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
                <div className=" text-center py-5">
                    <div className="container">
                        <div className="d-flex justify-content-end">
                                <select className="form-select w-auto" onChange={(e) => handleClick(e.target.value)}>
                                    <option value="">Filter Products</option>
                                    <option name="Low to High" value="ASC">Price: Low to High</option>
                                    <option name="High to Low" value="DESC">Price: High to Low</option>
                                    <option value="NEW">Newest</option>
                                    <option value="BEST">Best Selling</option>
                                </select>
                            </div>
                        <Cards  state={state.filterProducts}/>
                        <Outlet />
                    </div>
                </div>
        </>
    )
}
export default Dash;