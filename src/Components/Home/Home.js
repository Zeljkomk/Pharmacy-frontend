import React, {Component} from "react";
import Nav from "../Nav/Nav";
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        //debugger;
        await axios.get("http://localhost:8080/home").then(res => {
            console.log(res);
            console.log(res.data[0].genericName);
            this.setState({
                data: res.data
            })
            console.log(this.state.data);
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    render() {
        let najaven = localStorage.getItem('username');
        if (!this.state.data) {
            return <Nav/>
        }

        return (
            <div>
                <Nav></Nav>
                <div className="container" style={{minWidth: "1000px"}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" />
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[0].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[0].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[1].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[1].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[2].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[2].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[3].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[3].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[4].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[4].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[5].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[5].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[6].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[6].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[7].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[7].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="!#"> {this.state.data[8].genericName} </a></h5>
                                    <p className="card-text">{this.state.data[8].description}</p>
                                </div>

                                <div className="card-body">
                                    {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :
                                        <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default Home;