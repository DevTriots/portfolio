import React, {  useState } from "react";

const Contact=()=> {
 const[data, setData] = useState({name:"", email:"", phone:"", message:""});

const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
    }
  

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(data)
    console.log(data,"Succesesfully Submitted")  ;
};


    return (
      <div className="form1" id="form" >
      <form  onSubmit={handleSubmit}>
        <h1>Contact<span>Here</span></h1>
        <input type ="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="enter name..."/>
        <input type ="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
        <input type ="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+91"/>
        <textarea name ="message" id="" cols="30" onChange={handleChange}   value={data.message} rows="10" placeholder="type message here..."/>
        <button type="submit">send</button>
        {/* <p> {data.name}, {data.email}, {data.phone}, {data.message}</p> */}
      </form>
      
      </div>
    )
}

export default Contact;


