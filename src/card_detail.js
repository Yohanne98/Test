//card_detail.js
import React, { Component } from 'react';
//import axios from 'axios';

class CardDetail extends Component {


    render() {
        return (
            <div class="col-sm-2 pt-2" tyle={{ marginTop: 10 }}>
                <div class="card text-white bg-success">
                    <div class="card-header">
                        <p class="card-text"> {this.props.obj.id}</p>
                    </div>
                    <div class="card-body">

                        <p class="card-text"> {this.props.obj.name}</p>
                        <p class="card-text"> {this.props.obj.description}</p>
                        <p class="card-text"> {this.props.obj.time}</p>
                        <p class="card-text"> {this.props.obj.parent_card}</p>
                        <p class="card-text"> {this.props.obj.array}</p>
                        <p class="card-text"> {this.props.obj.role}</p>
                    </div>
                </div>
            </div>



        );
    }
}

export default CardDetail;