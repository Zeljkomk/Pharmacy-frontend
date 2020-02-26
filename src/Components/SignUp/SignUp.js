import React, {Component} from "react";
import axios from 'axios';
import './SignUp.css'
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav";


class SignUp extends Component {

    state={
        nomatchps:null,
        usermatch:null
    };

    saveUser = ()=>{
        debugger;
       let password =  document.getElementById('ps').value;
       let password_repeat =  document.getElementById('psr').value;
       let username = document.getElementById('us').value;
       if(password === password_repeat && password.length >6 && username.length>5) {
           this.setState({
               nomatchps:null
           });
           const form = new FormData();
           form.set('username', document.getElementById('us').value);
           form.set('password', document.getElementById('ps').value);

           axios.post("http://localhost:8080/user/add", form
           ).then(res => {
               console.table(res);
           }).catch((err) => {
               console.log("Error: ", err);
           });

           window.location.href = "http://localhost:3000/login";

       } else{
           if(password !== password_repeat && password.length < 6)
            this.setState({nomatchps:"Enter same password with min 6 characters"})
           if(username.length < 5)
            this.setState({usermatch:"Enter valid username with min 5 characters"})
       }
   };





    render() {
        return(
            <div>
                <Nav></Nav>

                    <div className="container" style={{maxWidth:"600px"}}>
                        <form>
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                            <label htmlFor="username"><b>Username: </b></label>
                            <input type="text" id="us" placeholder="Enter Username" name="username" required/>
                        {this.state.usermatch ? <p style={{color:"red"}}>{this.state.usermatch}</p>:<p></p>}
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" id='ps' placeholder="Enter Password" name="psw" required/>

                                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                    <input type="password" id='psr' placeholder="Repeat Password" name="psw-repeat" required/>
                        {this.state.nomatchps ? <p style={{color:"red"}}>{this.state.nomatchps}</p>:<p></p>}
                                        <label>
                                            <input type="checkbox" name="remember"
                                                   style={{marginBottom:"15px"}}/> Remember me
                                        </label>

                                        <div className="clearfix">
                                            <button type="button" className="cancelbtn"><Link to={"/login"} style={{color:"white"}}>Cancel</Link></button>
                                            <button type="submit" className="signupbtn" onClick={this.saveUser}>Sign Up</button>
                                        </div>
                                        </form>
                                        </div>
                                    </div>
        )
    }

}
export default SignUp;