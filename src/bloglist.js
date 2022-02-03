const BlogList = (props) => {
    let blogs=props.data
    let title=props.title
    let handleDelete=props.func;

    return ( 
        <div className="blog-list">
            {/* <h1 >{title}</h1> */}
            <h1 style={{color:"lightseagreen",padding:"10px"}} >Additional Package</h1>
            {blogs.map((data)=>(
  <div className="one">
       <div className="blogs">
       <h2 style={{color:"honeydew" }}>{data.goods}</h2>
       <p style={{color:"goldenrod"}}>Goods Supply From {data.supply}</p>
       <button style={{color:"white",backgroundColor:"lightblue",borderRadius:"20px"}} onClick={()=>handleDelete(data.id)}> Delete Blog</button>
  </div>
  </div>   
))}

        </div>
     );
}
 
export default BlogList;