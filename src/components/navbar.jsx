import { Link } from "react-router-dom"

function NavBar(){
    function ColorHandler(e){
         e.target.style.backgroundColor='blue'
         e.target.style. borderTopLeftRadius="500px"
         e.target.style.borderBottomRightRadius="500px"
         e.target.style.color='white'

    }
  
    
    return(
        
        <div className="rounded-top d-flex d-flex justify-content-between d-flex align-items-center " style={{width:"950px",height:"55px",backgroundColor:" #e6e6e6" ,marginTop:"-20px"}}>
           

            <Link to='/' className="font-weight-normal fs-6 text text-decoration-none  pt-3 pb-3 text-center rounded-right " style={{width:"300px",color:"grey"}} onClick={ColorHandler}>Your Profile</Link>
         
            <Link to='/business' className="font-weight-normal fs-6 text  text-decoration-none   pt-3 pb-3 text-center rounded-right" style={{width:"300px",color:"grey"}} onClick={ColorHandler}>Business Information</Link>
            <Link to='/Additional'className="font-weight-normal  fs-6 text text-decoration-none    pt-2 pb-2  text-center" style={{width:"300px",color:"grey"}}>Additional Users</Link>
        </div>
    )
}
export default NavBar


