import React, {Component} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";



class Login extends Component{


    checkUser = ()=> {
        // const history = useHistory();
        const form = new FormData();
        form.set('username', document.getElementById('use').value);
        form.set('password', document.getElementById('psw').value);
        console.log(document.getElementById('use').value);
        console.log(document.getElementById('psw').value);
        console.log(form);
        console.log(form.get('username'));
        console.log(form.get('password'));
    axios.post("http://localhost:8080/user/login", form
).then(res => {
    console.log(res);
    debugger;
    localStorage.setItem('username',res.data.username);
}).catch((err) => {
    console.log("Error: ", err);
})
        document.getElementById('use').value = "";
        document.getElementById('psw').value="";


        this.props.history.push('/');

    };



    render() {
        return(
            <div>
                <Nav></Nav>
        <div className={"container"}>


            <div className = "imgcontainer">
            <img src = {require("./index.jpeg")} alt = "Avatar" className = "avatar" />
            </div>

        <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" id="use" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" id="psw" placeholder="Enter Password" className={"mb-3"} name="psw" required/>
                
                <button type="submit" onClick={this.checkUser}>Login</button>
                <br/>
                    <label>
                        <br/>
                        <input type="checkbox"  name="remember"/> Remember me
                    </label>
        </div>

        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <p>Don't have account yet?<Link to={"/signup"}>Sign Up</Link></p>
        </div>
    </div>
            </div>

    )
    }
}
export default Login;