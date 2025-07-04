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
        <h2 className="">Registration page</h2>
    <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" name="email" class="form-control" id="inputEmail4" value ={formData.email} onChange={handleChange}/>
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" name="Password" class="form-control" id="inputPassword4" value ={formData.Password} onChange={handleChange}/>
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" name="Address" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange} value ={formData.Address}/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text"  name="City" class="form-control" id="inputCity"  value ={formData.City} onChange={handleChange}/>
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" name="State"  class="form-select" value ={formData.State} onChange={handleChange}>
            <option selected>Choose...</option>
            <option >Delhi</option>
            <option >Mumbai</option>
            <option >Chhattisgardh</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" name="Zip" class="form-control" id="inputZip" value ={formData.Zip} onChange={handleChange}/>
        </div>
        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" name="checkbox" type="checkbox" id="gridCheck" value ={formData.checkbox} onChange={handleChange}/>
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>
        </>
    )
}
export default RegisterPage;