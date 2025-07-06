import { useState } from "react";
import {db} from "../../SDK/firebase";
import { addDoc, collection } from "firebase/firestore"; 
// import { Outlet } from "react-router";

const RegisterPage=()=>{
    const userCollection=collection(db,"userdetails");

    const [formData,setFormData]=useState({
        email:"",
        Password:"",
        Address:"",
        City:"",
        State:"",
        Zip:"",
        checkbox:false
    })
    const handleChange=(e)=>{
    const {name ,type,value,checked}=e.target

    setFormData(pre=>({
        ...pre,
        [name]:type === "checkbox"? checked:value 
    }))
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
      const data=await addDoc(userCollection,formData)
      console.log(data)
    }

    return(
        <>
            <h2 className="text-center mb-4">Registration Page</h2>

            <form className="row g-3 p-4 border rounded shadow-sm" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail4"
                value={formData.email}
                onChange={handleChange}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input
                type="password"
                name="Password"
                className="form-control"
                id="inputPassword4"
                value={formData.Password}
                onChange={handleChange}
                />
            </div>

            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input
                type="text"
                name="Address"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={handleChange}
                value={formData.Address}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input
                type="text"
                name="City"
                className="form-control"
                id="inputCity"
                value={formData.City}
                onChange={handleChange}
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select
                id="inputState"
                name="State"
                className="form-select"
                value={formData.State}
                onChange={handleChange}
                >
                <option value="">Choose...</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Chhattisgardh</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input
                type="text"
                name="Zip"
                className="form-control"
                id="inputZip"
                value={formData.Zip}
                onChange={handleChange}
                />
            </div>

            <div className="col-12">
                <div className="form-check">
                <input
                    className="form-check-input"
                    name="checkbox"
                    type="checkbox"
                    id="gridCheck"
                    value={formData.checkbox}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>

            <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-4">Sign in</button>
            </div>
            </form>

        </>
    )
}
export default RegisterPage;