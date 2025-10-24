import { useState } from "react";

export default function LoginForm(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    const inputemail = (e) => {
        setEmail(e.target.value);
    }
    const inputpwd = (e) => {
        setPassword(e.target.value);
    }
    const checklogin = () => {
        if(email === "dummy@gmail.com" && password === "dummy@123"){
            setMessage("Success");
        }else{
            setMessage("Failure");
        }
    }
    return (<div>
        <input type="text" value={email} onChange={inputemail}/>
        <input type="text" value={password} onChange={inputpwd}/>
        <button onClick={checklogin} >Login</button>
        <p>
            {message}
        </p>
    </div>);
}