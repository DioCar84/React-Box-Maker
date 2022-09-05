import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: '',
        }
        this.handleChange = this.handleChange.bind (this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
      evt.preventDefault();
      this.props.takeInput(this.state);
      this.setState({
        width: '',
        height: '',
        color: ''
    })
    }

    handleChange(evt){
      this.setState(
            {[evt.target.name]:evt.target.value}
        )
    }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input id='width' name='width' value={this.state.width} onChange={this.handleChange}/>
            <label htmlFor="height">Height:</label>
            <input id='height' name='height' value={this.state.height} onChange={this.handleChange}/>
            <label htmlFor="color">Background Color:</label>
            <input id='color' name='color' value={this.state.color} onChange={this.handleChange}/>
            <button>Create Box</button>
        </form>
    </div>
    )
  }
}

export default NewBoxForm