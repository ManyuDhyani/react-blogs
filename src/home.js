import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setBlogs(data);
        })
    }, []);

    return (
        <div className='home'>
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    )
}
 
export default Home;





// const Home = () => {
//     //et name = 'mario';

//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);
//     const handleClick = () => {
//         setName("Manyu")
//         setAge(28)
//     }
//     // const handleClickAgain = (name, e) => {
//     //     console.log("Second button" + name, e)
//     // }

//     return (
//         <div className="home">
//             <h2>Homepage</h2> 
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
//             {/* <button onClick={(e) => {handleClickAgain('manyu', e)}}> Click me Again </button> */}
//         </div>
//       );
// }





{/* <div className='home'>
<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
<BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="Mario's Blog" />
<button onClick={()=>setName('Manyu')}>Click here</button>
<p>{name}</p>
</div> */}