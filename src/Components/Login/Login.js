import React, {Component} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";


class Login extends Component {


    checkUser = () => {
        const form = new FormData();
        form.set('username', document.getElementById('use').value);
        form.set('password', document.getElementById('psw').value);
        axios.post("http://localhost:8080/user/login", form
        ).then(res => {
            localStorage.setItem('username', res.data.username);
        }).catch((err) => {
            console.log("Error: ", err);
        });
        document.getElementById('use').value = "";
        document.getElementById('psw').value = "";


        this.props.history.push('/');

    };


    render() {
        return (
            <div>
                <Nav></Nav>
                <div className={"container"} style={{maxWidth:"600px"}}>


                    <div className="imgcontainer">
                        <img src={require("./index.jpeg")} alt="Avatar" className="avatar"/>
                    </div>

                    <div className="container" onSubmit={this.checkUser}>
                        <form>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" id="use" placeholder="Enter Username" name="uname" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" id="psw" placeholder="Enter Password" className={"mb-3"} name="psw"
                               required/>

                        <button type="submit" >Login</button>
                        </form>
                        <br/>
                        <label>
                            <br/>
                            <input type="checkbox" name="remember"/> Remember me
                        </label>
                    </div>

                    <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                        <p>Don't have account yet? <Link to={"/signup"}>Sign Up</Link></p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;