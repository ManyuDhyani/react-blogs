import {useState} from 'react';

const Home = () => {
    //et name = 'mario';

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName("Manyu")
        setAge(28)
    }
    // const handleClickAgain = (name, e) => {
    //     console.log("Second button" + name, e)
    // }

    return (
        <div className="home">
            <h2>Homepage</h2> 
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => {handleClickAgain('manyu', e)}}> Click me Again </button> */}
        </div>
      );
}
 
export default Home;