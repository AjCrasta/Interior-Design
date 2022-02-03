import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import LoadImage from './load1.png'



const Home = () => {

    let handleDelete = (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    let [blogs, setBlogs] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch(" http://localhost:8000/blogs")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                });
        }, 3000);
    }, []);

    return (
        <div className="hme">
            <div className="h1"><h1>Best Interior Designers</h1>
                <p id="hm"><i>Interior decor of your home is just as important as any other aspect within your home. <br /> While constructing or refurbishing a space, <br /> immense importance is given to architecture but any space can’t be called a dream home unless <br /> equal effort is put towards interior planning and designing of such space. <br /> It is this process of décor where you need to seek the help of the best home interior designers in Bangalore,  <br /> who can actually convert an architectural beauty to a design marvel. <br /> Whether you are looking for bedroom interior designers in Bangalore, <br /> modular kitchen interior designers in Bangalore, <br /> Decorpot is your one stop solution for all home interior design needs.</i></p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="tmon">
                <h1>Testimonials</h1>
                <div className="tes">
                    <p><b><i> We are extremely happy with the design as well as finished interiors. Project was executed very professionally and completed on time. Thank you Decorpot for transforming our house to a home </i></b></p>
                    <p><b><i>Decorpot Designers were quite flexible in doing customization and were open to feedbacks across the design and delivery process. Really Happy with the final output</i></b></p>
                    <p><b><i>We don’t find people who get back to you without a wrinkle on their face when we keep questioning them about the design aspects. That’s what I like about them. Their Attitude </i></b></p>
                </div>
            </div>
            {/* <BlogList data={blogs} title="All Blogs" func={handleDelete} /> */}
            {/* {isLoading && <p>Loading.....</p>     } */}
            {isLoading && <img src={LoadImage} alt="" style={{ width: "30px", margin: "30px" }} />}
        </div>
    );
}

export default Home;