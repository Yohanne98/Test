// App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CardDetail from './card_detail';


class App extends Component {

  constructor(props) {
    super(props);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeParent_Card = this.onChangeParent_Card.bind(this);
    this.onChangeArray = this.onChangeArray.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: '',
      name: '',
      description: '',
      time: '',
      parent_card: '',
      array: '',
      role: '',
      person: []
    }
  }


  onChangeID(e) {
    this.setState({
      id: e.target.value
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeTime(e) {
    this.setState({
      time: e.target.value
    })
  }
  onChangeParent_Card(e) {
    this.setState({
      parent_card: e.target.value
    })
  }
  onChangeArray(e) {
    this.setState({
      array: e.target.value
    })
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.id}, ${this.state.name},${this.state.description}, ${this.state.time},
    ${this.state.parent_card}, ${this.state.array}, and  ${this.state.role}`)
    

    const obj = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      time: this.state.time,
      parent_card: this.state.parent_card,
      array: this.state.array,
      role: this.state.role
    };
    axios.post('http://localhost:4000/person/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      id: '',
      name: '',
      description: '',
      time: '',
      parent_card: '',
      array: '',
      role: ''
    })
  }

  componentDidMount() {
    axios.get('http://localhost:4000/person')
        .then(response => {
            this.setState({ person: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}

  cardDetail() {
    return this.state.person.map(function (object, i) {
      return <CardDetail obj={object} key={i} />;
    });
  }



  render() {
    return (
      <div className="container">

        <div style={{ marginTop: 10 }}>
          <h3>Person details</h3>

          <form onSubmit={this.onSubmit} method="POST" action="send">
            <div className="form-group">
              <label>ID: </label>
              <input type="text" className="form-control" value={this.state.id} onChange={this.onChangeID} />
            </div>
            <div className="form-group">
              <label>Name: </label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
            </div>
            <div className="form-group">
              <label>Time Duration (By month,day,years): </label>
              <input type="text" className="form-control" value={this.state.time} onChange={this.onChangeTime} />
            </div>
            <div className="form-group">
              <label>Parent Card: </label>
              <input type="text" className="form-control" value={this.state.parent_card} onChange={this.onChangeParent_Card} />
            </div><div className="form-group">
              <label>Array of Attributes : </label>
              <input type="text" className="form-control" value={this.state.array} onChange={this.onChangeArray} />
            </div>
            <div className="form-group">
              <label>Role : </label>
              <input type="text" className="form-control" value={this.state.role} onChange={this.onChangeRole} />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit details" className="btn btn-primary" />
            </div>
          </form>

          

          <div style={{ marginTop: 30 }}>
            
            <h3>Person Details</h3>

            <button onClick={() => window.location.reload(false)} className="btn btn-secondary">Click to reload!</button>

            {this.cardDetail()}
          </div>
        </div>


      </div>

    );
  }

}

export default App;