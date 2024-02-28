const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }
    const handleClickAgain = (name, e) => {
        console.log("Second button" + name, e)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain('manyu', e)}}> Click me Again </button>
        </div>
      );
}
 
export default Home;