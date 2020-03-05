import React, {Component} from "react";
import Nav from "../Nav/Nav";
import axios from 'axios';

class MedicineDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        var obj = this.props.match.params;
        let name = obj.name;
        let url = 'http://localhost:8080/home/details/' + name;

        axios.get(url).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        if (!this.state.data) {
            return <Nav/>
        }
        return (
            <div>
                <Nav></Nav>
                <div className="container">
                    <div className="row"><img className="rounded-circle"
                                              src={this.state.data.aggregateState === 'Liquid' ? "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2515222.jpg" : "https://upload.wikimedia.org/wikipedia/commons/0/00/FlattenedRoundPills.jpg"}
                    alt=""  width={150} height={220}/></div>
                    <div className="row"><p><small>Generic Name: </small>{this.state.data.genericName}</p></div>
                    <div className="row"><p><small>Aggregate State: </small>{this.state.data.aggregateState}</p></div>
                    <div className="row"><p><small>Average Weight: </small>{this.state.data.avgWeight}</p></div>
                    <div className="row"><p><small>Chemical Formula: </small>{this.state.data.chemicalFormula}</p></div>
                    <div className="row"><p><small>Indication: </small>{this.state.data.indication}</p></div>
                    <div className="row"><p><small>Description: </small>{this.state.data.description}</p></div>
                    <div className="row"><p><a href={"/home"} className="btn btn-warning">Back</a></p></div>
                </div>
            </div>
        );
    }
}

export default MedicineDetails;