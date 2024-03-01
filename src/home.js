import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog)=> blog.author === "mario")} title="Mario's Blog" />
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