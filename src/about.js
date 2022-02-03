import img1 from "./bedrm.jpg"
import img2 from "./ktchn.jpg"
import img3 from "./backr.jpg"
import img4 from "./flg1.jpg"
import img5 from "./flg2.jpg"
import img6 from "./flg3.jpg"
import Iframe from "./iframe"
import { useState } from "react"
import BlogList from "./bloglist"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const AboutUs = () => {
// const View=()=>{
//   <iframe width="560" height="315" src="https://www.youtube.com/embed/_Ecl_XEETEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// }
let[blogs,setBlogs] =useState([
       {goods:"Lights ,Lazer Light ,Design,",  supply:"Karnataka",id:1},
        {goods:"Lights ,Lazer Light ,Design,Wood Design",  supply:"Maharastra",id:2},
       {goods:"Lights ,Lazer Light ,Design,Sofa",  supply:"Kerala",id:3},
        {goods:"Lights ,Lazer Light ,Design,Home Theatre",  supply:"Goa",id:4},
       {goods:"Lights ,Lazer Light ,Design,Party Hall Design",  supply:"Delhi",id:5} 
  ])
  
  let handleDelete=(id)=>{
  let newBlogs=blogs.filter((blog)=>blog.id !==id )
  setBlogs(newBlogs);
  }
  return ( 
    <div  >
     <div className="int">
        <h1>Why The Interior Design?</h1>
      <h5>We shape our homes, and then, our homes shape us – Winston Churchill</h5>
      <p>For the KariGhars team, every detail in design must have a purpose, <br /> must reflect your personality and must be beautiful. <br /> For years, we have transformed ordinary houses into warm, <br /> luxurious homes by planning efficient layouts, using uplifting color palettes, <br /> bespoke furniture and strategic lighting schemes.  <br />
      Our team of designers and craftsmen combine their vision and aesthetic values with high-quality materials. <br /> We don’t just create spaces that look good,  <br /> we create functional spaces that have a positive impact on your wellbeing.
</p></div>
<div >
{/* {<ul className="imgs">
  <li id="i"><img  src={img1} alt="" style={{width:"350px",margin:"30px"}}/></li>
  <li id="i"><img src={img2} alt=""  style={{width:"350px",margin:"30px"}}/></li>
  <li id="i"><img src={img3} alt=""style={{width:"350px",margin:"30px"}} /></li>
</ul>} */}

</div>

{<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100 "  alt="..."  />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>}

<div  className="imgs">
 <h1>Company Partners</h1>
  {<ul>
  <li id="i"><img  src={img4} alt="" style={{width:"150px",margin:"30px"}}/> </li>
  <li id="i"><img src={img5} alt=""  style={{width:"150px",margin:"30px"}}/></li>
  <li id="i"><img src={img6} alt=""style={{width:"150px",margin:"30px"}} /></li>
</ul>}

</div>
<div className="dsgn">
  <h2>READY TO DESIGN YOUR #DECORHOME</h2>
  <h4>Personalized Interior Design Solutions for Your Home from Expert Professionals.</h4>
  <button onClick={Iframe} style={{border:"none"}} >Visit Decor Video</button>
</div>
<div className="bang">
  <h1>Meet Bengaluru's Best Home Interior Designers</h1>
   <p><i>Welcome to Decorpot - The interior design hub. <br /> With an experience of transforming more than 2000+ home interiors, <br /> our interior designers in bangalore creatively add a vibrant touch of elegance and <br /> functionality to your space, making it aesthetically appealing. <br /> So whether you are looking out for a tailored decor requirement <br /> like modular kitchen in bangalore or living room interior designing in bangalore <br /> or looking for end to end decor and execution support, we at decorpot interiors <br /> bangalore will understand your need and cater accordingly, <br />
     ensuring delivery of your custom interiors in promised timelines.</i></p>
</div>

{/* <div>
  {blogs.map((data)=>(
  <div className="one">
       <div className="blogs">
       <h2>{data.goods}</h2>
       <p>Company goods from {data.supply}</p>
  </div>
  </div>   
))}
</div> */}
<BlogList  data={blogs}  func={handleDelete}/>
    </div>
   );
}
 
export default AboutUs;