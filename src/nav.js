import { Link } from "react-router-dom";
import  pic from "./logointreact.png"

const Nav= () => {
    return (
        // <nav style={{backgroundColor:"grey"}}>
        //   <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar">

        //   </img>
        //     <div className="list">
        //         <ul>
        //             <li><a href="">Home</a></li>
        //             <li><a href="">about</a></li>
        //             <li><a href="">projects</a></li>
        //             <li><a href="">contacts</a></li>
        //         </ul>
        //     </div>
        // </nav>
        <div className="first">
            <nav>
                
              <Link to="/" id="nav">  <img src={pic} alt="" />  </Link>
              
                <div className="and">
                    <ul id="tag">
                        <li><Link  to="/"> Home</Link> </li>
                        <li><Link  to="/about"> About Us</Link> </li>
                        <li><Link  to="/cmp"> Customer Details</Link> </li>
                        <li><Link  to="/contact"> Contact Us</Link> </li>

                    </ul>
                </div>
            </nav>
        </div>

      );
}
 
export default Nav;