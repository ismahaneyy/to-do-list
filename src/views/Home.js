import TodoList from "../components/TodoList"
import TodoItems from "../components/TodoItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"



function Home(){
    return (
        // to return more than 1 element
    <>
     <Navbar/>
    <TodoList/>
    <Footer/>
    </>
    )
    }
    

    //main component to be exported 
    export default Home  
    