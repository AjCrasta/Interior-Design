import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Customer = () => {
    let[name,setTitle]=useState("")
    let[email,setAuthor]=useState("")
    let[mobileNo,]=useState("")
    let history=useHistory();
    let[load,setIsload]=useState("Submit")

    let handleSubmit =(e)=>{
      e.preventDefault();
      setIsload=("Loading")
      let blog={name,email,}  
    //   console.log(blog);
    setTimeout(()=>{
    fetch(" http://localhost:8000/blogs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
        alert("Sucessfully Added the Details")
        history.push('/')
        
    })
    
},3000)
    };

    return ( 
        <div className="create-page1">
            <h1 id="cone">To Update Our Customer About New Product ,Offers Do Fill The Form </h1>
            <h4 style={{color:"yellowgreen" ,padding:"20px"}}> <i> Flat 50% Discount to Our Old Customer</i>  </h4>
            <div className="blog-form">
            <form onSubmit={handleSubmit}> 
                <label htmlFor="" className="n">FUll Name</label><br />
                <input type="text" className="three" required value={name} onChange={(e)=>setTitle(e.target.value)} /><br />
                <label htmlFor="" className="n">Email ID</label><br />
                <input type="email"className="three"  required value={email} onChange={(e)=>setAuthor(e.target.value)} /><br />
                {/* <label htmlFor="" className="n">Mobile No</label><br />
                <input type="tel" className="three" required value={mobileNo} onChange={(e)=>setTitle(e.target.value)} /><br /> */}
                {/* <button  className="hi">Add blog</button><br /> */}
                <button  className="hi">{load}</button><br />
            </form>
            </div>
            {/* <h2>{title}</h2>
            <h3>{author}</h3> */}
        </div> 
     );
}
 
export default Customer;