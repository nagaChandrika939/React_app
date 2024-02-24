
import Form2B from "./Form2b";

function BusinessInfo(){
    return(
        <div style={{backgroundColor:"white" , width:"950px"}}>
        <div className="d-flex flex-column align-items-center">
        <p className="fs-5 text-muted mt-2">Step 2</p>
        <p className=" fs-1">Business Information</p>
        <p className="fs-6 text-center" style={{width:"500px"}}>Please Enter information about your company</p>
        <div>
            <Form2B/>
        </div>
        </div>
    </div>
    )
}

export default BusinessInfo