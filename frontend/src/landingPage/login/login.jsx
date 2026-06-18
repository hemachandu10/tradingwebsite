import React from 'react';
import {useState} from 'react'
import axios from 'axios';//Axios is a popular, promise-based HTTP client used in React applications to seamlessly send requests to APIs and handle backend communications. 

function Login() {
  const [data,setData]=useState({ 
    email:"",
    password:"",

  })
  function changeData(event){
    let fieldname=event.target.name;
    let fieldvalue=event.target.value;
    setData((predata)=>{
      predata[fieldname]=fieldvalue;
      return {...predata};
    })
  }
  
async function handleSubmit(event){
    event.preventDefault();
    console.log(data)
    
    let response=await axios.post("https://tradingwebsite-8qfx.onrender.com/login",data).catch((err)=>{console.log(err)});
    
    //console.log(response)
    if (response.data.success) {
      window.location.replace("https://tradingwebsite-nqtn.vercel.app/");
    } else {
      alert(response.data.message);
    }
    setData({ 
    email:"",
    password:"",
  })
  }
  return (
    <div className="container my-5 border">
      <div className="title my-4">
        <h2>Login Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" value={data.email} name="email" onChange={changeData} aria-describedby="emailHelp" required/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={data.password} name="password" onChange={changeData} required/>
        </div>
        <button type="submit" class="btn btn-primary mb-4">Submit</button>
      </form>
    </div>
  );
}

export default Login;    