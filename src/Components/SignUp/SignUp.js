import React, {Component} from "react";
import axios from 'axios';
import './SignUp.css'
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav";


class SignUp extends Component {


    saveUser = ()=>{
            let password = document.getElementById('ps').value;
            let password_repeat = document.getElementById('psr').value;
            if(password===password_repeat) {
                const form = new FormData();
                form.append('username', document.getElementById('us').value);
                form.append('password', document.getElementById('ps').value);

                axios.post("http://localhost:8080/user/add", form
                ).then(res => {
                    console.log(res);
                }).catch((err) => {
                    console.log("Error: ", err);
                });

                window.location.href = "http://localhost:3000/login";
            }
   };





    render() {
        return(
            <div>
                <Nav></Nav>

                    <div className="container" style={{maxWidth:"600px"}}>
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                            <label htmlFor="username"><b>Username: </b></label>
                            <input type="text" id="us" placeholder="Enter Username" name="username" required/>
                                <label htmlFor="password"><b>Password: </b></label>
                                <input type="password" id='ps' placeholder="Enter Password" name="password" required/>
                                <label htmlFor="psr"><b>Repeat Password: </b></label>
                                <input type="password" id='psr' placeholder="Repeat Password" name="psr" required/>
                                        <label>
                                            <input type="checkbox" name="remember"
                                                   style={{marginBottom:"15px"}}/> Remember me
                                        </label>

                                        <div className="clearfix">
                                            <button type="button" className="cancelbtn"><Link to={"/login"} style={{color:"white"}}>Cancel</Link></button>
                                            <button type="submit" className="signupbtn" onClick={this.saveUser}>Sign Up</button>
                                        </div>
                                        </div>
                                    </div>
        )
    }

}
export default SignUp;