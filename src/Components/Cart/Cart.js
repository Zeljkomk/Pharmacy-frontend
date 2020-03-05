import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import './../../App.css'

class Cart extends Component {
    state = {
        data: null,
        type1:true
    };

    componentDidMount() {
        debugger;
        let najaven = localStorage.getItem('username');
        const form = new FormData();
        form.set('username', najaven);

        axios.post("http://localhost:8080/cart", form).then(res => {
            // console.log(res);
            this.setState({data: res.data})
        }).catch(err => {
            console.log(err);
        });
    }

    deleteFromCart = (index, genericName) => {
        let najaven = localStorage.getItem('username');
        const form = new FormData();
        form.set('username', najaven);
        form.set('genericName', genericName);
        axios.post("http://localhost:8080/cart/delete", form).then(res => {
            // console.log(res);
        }).catch(err => {
            console.log(err);
        });

        let bt = document.getElementById(index);
        let tr = bt.parentNode.parentElement;
        tr.parentNode.removeChild(tr);
    };

    sortByAggregateState = () =>{
        // true  = asc false = desc
      debugger;
      this.setState((prevState)=> ({
          type1: !prevState.type1
      }));
        console.log(this.state.type1);
      if(this.state.type1===false){
          let type="desc";
          const form = new FormData()
          form.append('username',localStorage.getItem('username'));
          form.append('type',type)
          axios.post("http://localhost:8080/cart/sort",form).then(res=>{
              this.setState({data:res.data})
          }).catch(err=>{
              console.log(err);
          })
      }
      else{
          let type="asc";
          const form = new FormData()
          form.append('username',localStorage.getItem('username'));
          form.append('type',type)
          axios.post("http://localhost:8080/cart/sort",form).then(res=>{
              this.setState({data:res.data})
          }).catch(err=>{
              console.log(err);
          })
      }
    };

    render() {
        console.log('vtor')
        let najaven = localStorage.getItem('username');

        if (!this.state.data) {
            return (<Nav/>)
        }

        return (
            <div>
                <Nav/>
                <h1 className="text-center m-3">Welcome to your shopping cart {najaven}</h1>
                <div className="container" style={{maxWidth: "1140px !important"}}>

                    <table className="table">
                        <thead>
                        <tr>
                            <td>Generic Name</td>
                            <td>Aggregate State</td>
                            <td onClick={this.sortByAggregateState}>{this.state.type1===false?<i className="fa fa-arrow-up"></i>:<i className="fa fa-arrow-down"></i>}Average weight</td>
                            <td>Indication</td>
                            <td>Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.genericName}</td>
                                        <td>{item.aggregateState}</td>
                                        <td>{item.avgWeight}</td>
                                        <td>{item.indication}</td>
                                        <td>
                                            <button className={"btn btn-danger"} id={index}
                                                    onClick={() => this.deleteFromCart(index, item.genericName)}>Remove
                                            </button>
                                        </td>
                                    </tr>)
                            })
                        }

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Cart;