import React, {Component} from "react";
import axios from 'axios';
import './SignUp.css'
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav";


class SignUp extends Component {

    saveUser = ()=>{
    const form = new FormData();
    form.set('username', document.getElementById('us').value);
    form.set('password', document.getElementById('ps').value);

        axios.post("http://localhost:8080/user/add", form
        ).then(res => {
            console.table(res);
        }).catch((err) => {
            console.log("Error: ", err);
        })
    };




    render() {
        return(
            <div>
                <Nav></Nav>

                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                            <label htmlFor="username"><b>Username: </b></label>
                            <input type="text" id="us" placeholder="Enter Username" name="username" required/>

                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" id='ps' placeholder="Enter Password" name="psw" required/>

                                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

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