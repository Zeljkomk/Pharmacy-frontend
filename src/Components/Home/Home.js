import React, {Component} from "react";
import './Home.css'
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
        await axios.get("http://localhost:8080/home").then(res => {
            // console.log(res)admin;
            this.setState({
                data: res.data
            })
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    searchMedicine = () => {
        let inputSearch = document.getElementById('search').value;
        let url = 'http://localhost:8080/home/search/' + inputSearch;

        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {

        })
    };
    findAllLiquid = () => {
        let url = 'http://localhost:8080/home/filter/10/liquid';
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data

            })
        }).catch(err => {
            console.log(err)
        })
    };
    sortAllAsc = () => {
        let url = 'http://localhost:8080/home/sort/10/asc';
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    sortAllDesc = () => {
        let url = 'http://localhost:8080/home/sort/10/desc';
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };

    findAllSolid = () => {
        let url = 'http://localhost:8080/home/filter/10/solid';
        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    };

    addToCart = (genericName) => {
        debugger;
        // let a = document.getElementById('a').innerText;
        // var ainte=parseInt(a);
        let username = localStorage.getItem('username');
        const form = new FormData();
        form.set('username', username);
        form.set('genericName', genericName);
        axios.post("http://localhost:8080/cart/addToCart", form).then(res => {
            // console.log(res);
            alert('You added medicine to your cart successfully')
        }).catch(err => {
            console.log(err);
        });

    };

    pagination = (e) =>{
        debugger;
        let page = e.target.innerText;
        axios.get("http://localhost:8080/home/page/"+page).then(res=>{
            this.setState({
                data:res.data
            })
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    };

    render() {
        let najaven = localStorage.getItem('username');

        if (!this.state.data) {
            return (<Nav></Nav>)
        }

        return (
            <div>
                <Nav></Nav>

                <div className="container" style={{minWidth: "1000px"}}>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" id="search" placeholder="Search this blog"/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button" onClick={this.searchMedicine}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8"><input className="btn btn-dark" type="submit"
                                                                           value="Liquid" onClick={this.findAllLiquid}/>
                            <input className="btn btn-dark ml-2" type="submit" value="Solid"
                                   onClick={this.findAllSolid}/>
                        </div>

                    </div>
                    <div className="row">
                        {
                            this.state.data.map((item, index) => {
                                let param = item.genericName;
                                let param1 = item.aggregateState;
                                return (
                                    <div key={index} className="col-lg-4 col-md-4 col-sm-4">
                                        {param1 === "Liquid" ?
                                            <div className="card m-2" style={{width: "18rem"}}>
                                                <img className="card-img-top"
                                                     src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2515222.jpg"
                                                     alt="" width={40} height={220}/>
                                                <div className="card-body">
                                                    <h5 className="card-title"><a
                                                        href={"/details/" + param}> {item.genericName} </a></h5>
                                                    <p className="card-text">{item.description}</p>
                                                </div>

                                                <div className="card-body">
                                                    {najaven ? <button className="card-link btn btn-primary"
                                                                       onClick={() => this.addToCart(item.genericName)}>Add
                                                            to Cart</button> :
                                                        <a className="card-link btn btn-primary btn btn-primary btn btn-primary"
                                                           href={"/login"}>Add to Cart </a>}
                                                </div>
                                            </div> :

                                            <div className="card m-2" style={{width: "18rem"}}>
                                                <img className="card-img-top"
                                                     src="https://upload.wikimedia.org/wikipedia/commons/0/00/FlattenedRoundPills.jpg"
                                                     alt="" width={40} height={220}/>
                                                <div className="card-body">
                                                    <h5 className="card-title"><a
                                                        href={"/details/" + param}> {item.genericName} </a></h5>
                                                    <p className="card-text">{item.description}</p>
                                                </div>

                                                <div className="card-body">
                                                    {najaven ? <button className="card-link btn btn-primary"
                                                                       onClick={() => this.addToCart(item.genericName)}>Add
                                                            to Cart</button> :
                                                        <a className="card-link btn btn-primary btn btn-primary btn btn-primary"
                                                           href={"/login"}>Add to Cart </a>}
                                                </div>
                                            </div>}

                                    </div>
                                );
                            })
                        }

                    </div>
                        <div className="text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">

                                    <li className="page-item"><a className="page-link" style={{color:"#007bff"}} onClick={(e)=>this.pagination(e)}>1</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>2</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>3</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>4</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>5</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>6</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>7</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>8</a></li>
                                    <li className="page-item"><a className="page-link" onClick={(e)=>this.pagination(e)}>9</a></li>
                                    <li className="page-item"><a className="page-link"  onClick={(e)=>this.pagination(e)}>10</a></li>
                    </ul>
                            </nav>
                        </div>
                </div>

            </div>

        )
    }

}

export default Home;