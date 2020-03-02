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
        await axios.get("http://localhost:8080/home").then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    searchMedicine = () =>{
        let inputSearch = document.getElementById('search').value;
        let url = 'http://localhost:8080/home/search/'+inputSearch;

      axios.get(url).then(res =>{
          console.log(res);
          this.setState({
              data:res.data
          })
      }).catch(err => {

      })
    };
    findAllLiquid = () =>{
        let url ='http://localhost:8080/home/filter/10/liquid';
        axios.get(url).then(res=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        }).catch(err=>{
            console.log(err )
        })
    };
    sortAllAsc=()=>{
        let url='http://localhost:8080/home/sort/10/asc';
        axios.get(url).then(res=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        }).catch(err=>{
            console.log(err )
        })
    };
    sortAllDesc=()=>{
        let url='http://localhost:8080/home/sort/10/desc';
        axios.get(url).then(res=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        }).catch(err=>{
            console.log(err )
        })
    };

    findAllSolid = () =>{
        let url ='http://localhost:8080/home/filter/10/solid';
        axios.get(url).then(res=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        }).catch(err=>{
            console.log(err )
        })
    };

    addToCart = (genericName) =>{
        debugger;
      let username = localStorage.getItem('username');
        const form = new FormData();
        form.set('username',username);
        form.set('genericName',genericName);
        axios.post("http://localhost:8080/cart/addToCart",form).then(res=>{
            // console.log(res);
            alert('You added medicine to your cart successfully')
        }).catch(err=>{
            console.log(err);
        });

    };

    render() {
        let najaven = localStorage.getItem('username');


        if (!this.state.data) {
            return (<Nav/>)
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
                        </div></div>
                    <div className="col-sm-8 col-md-8 col-lg-8"><input className="btn btn-dark" type="submit" value="Liquid" onClick={this.findAllLiquid}/> <input className="btn btn-dark ml-2" type="submit" value="Solid" onClick={this.findAllSolid}/>     <input className="btn btn-primary" type="submit" value="Sort drugs Ascending" onClick={this.sortAllAsc}/>   <input className="btn btn-danger" type="submit" value="Sort drugs Descending" onClick={this.sortAllDesc}/>
                    </div>

                    </div>
                    <div className="row">
                        {
                            this.state.data.map((item,index)=>{
                                let param = item.genericName;
                                let param1=item.aggregateState;
                                console.log(param1);
                                console.log(param);
                                return(
                                    <div key={index} className="col-lg-4 col-md-4 col-sm-4">
                                        {param1==="Liquid"?
                                    <div className="card m-2" style={{width: "18rem"}}>
                                                    <img className="card-img-top" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2515222.jpg" alt="" width={40} height={220} />
                                                    <div className="card-body">
                                                        <h5 className="card-title"><a href={"/details/"+param}> {item.genericName} </a></h5>
                                                        <p className="card-text">{item.description}</p>
                                                    </div>

                                                    <div className="card-body">
                                                        {najaven ? <button className="card-link btn btn-primary" onClick={()=>this.addToCart(item.genericName)} >Add to Cart</button> :
                                                            <a className="card-link btn btn-primary btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}
                                                    </div>
                                                </div>:

                                        <div className="card m-2" style={{width: "18rem"}}>
                                            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/00/FlattenedRoundPills.jpg" alt="" width={40} height={220} />
                                            <div className="card-body">
                                                <h5 className="card-title"><a href={"/details/"+param}> {item.genericName} </a></h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>

                                            <div className="card-body">
                                                {najaven ? <button className="card-link btn btn-primary" onClick={()=>this.addToCart(item.genericName)} >Add to Cart</button> :
                                                    <a className="card-link btn btn-primary btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}
                                            </div>
                                        </div>}

                                    </div>
                                );
                            })
                        }

                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" />*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[0].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[0].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[1].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[1].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[2].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[2].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[3].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[3].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[4].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[4].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[5].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[5].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[6].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[6].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[7].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[7].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                    {/*        <div className="card" style={{width: "18rem"}}>*/}
                    {/*            <img className="card-img-top" src="https://www.clipartkey.com/mpngs/m/25-255092_pharmacy-capsule-logo-clipart-png-download-transparent-pharmacy.png" alt="Card image cap"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title"><a href="!#"> {this.state.data[8].genericName} </a></h5>*/}
                    {/*                <p className="card-text">{this.state.data[8].description}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="card-body">*/}
                    {/*                {najaven ? <a href={"!#"} className="card-link btn btn-primary">Add to Cart</a> :*/}
                    {/*                    <a className="card-link btn btn-primary" href={"/login"}>Add to Cart </a>}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>

        )
    }

}

export default Home;