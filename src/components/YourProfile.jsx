import Form2A from "./Form1a"
function YourProfile(){
    return(
        <div style={{backgroundColor:"white" , width:"950px"}}>
            <div className="d-flex flex-column align-items-center">
            <p className="fs-5 text-muted mt-2">Step 1</p>
            <p className=" fs-1">Your Profile</p>
            <p className="fs-6 text-center" style={{width:"500px"}}>Enter the login information for your account.You will <br/>be able to create additional users after registering</p>
            <div>
                <Form2A/>
            </div>
            </div>
        </div>
    )
}

export default YourProfile