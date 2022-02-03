import img11 from "./wsapp.png"
import img12 from "./twttr.png"
import img13 from "./yu.png"
import img14 from "./insta.png"

const Contactus = () => {
    const handleClick=()=>{
        alert("Successfully Added the Data")
    }
    return ( 
        
    <div>
         <h1 id="cn">Contact Us</h1>
        <div className="frm">
        <label htmlFor="in" id="on">First Name</label> <br />
        <input type="text"  id="in" /> <br />
        <label htmlFor=""  id="on">Middle Name</label> <br />
        <input type="text"  id="in" /> <br />
        <label htmlFor=""  id="on">Last Name</label><br />
        <input type="text"  id="in" /> <br />
        <label htmlFor=""  id="on">Email Id</label><br />
        <input type="email"id="in"/> <br />
        <label htmlFor="" id="on">Mobile No</label> <br />
        <input type="tel" id="in" /> <br />
        <button onClick={handleClick} id="bt">Submit</button>
        </div>
        <div className="mm">
   <h2 id="mg">The Magic Happens Here</h2>
   <p id="mn">Want to design beautiful interiors – Plan a trip to The KariGhars Experience Center. <br /> See full-sized models of bespoke furniture, touch luxury through our fabrics and finishes, <br /> experience design at its best.</p>
   </div>
     <div className="add">
         <h3 id="m1">The Interior design</h3>
<p id="m2"> 1566 2nd Floor, Service Rd,<br />
Agara Village, 1st Sector,<br />
HSR Layout, Bengaluru, Karnataka 560102 <br />

 Email: support@thekarighars.com <br />
 Phone: +91 9876543210</p><br />
        </div>
<div className="jai">
{<ul>
  <li id="o"><img  src={img11} alt="" style={{width:"30px",margin:"30px"}}/> </li>
  <li id="o"><img src={img12} alt=""  style={{width:"30px",margin:"30px"}}/></li>
  <li id="o"><img src={img13} alt=""style={{width:"30px",margin:"30px"}} /></li>
  <li id="o"><img src={img14} alt=""style={{width:"30px",margin:"30px"}} /></li>
</ul>}
<h6 id="all">@ All Right Reserved</h6>
</div>

    </div>
        
     );
}
 
export default Contactus;