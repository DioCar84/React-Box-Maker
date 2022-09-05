import React, { Component } from 'react'

class Box extends Component {
    style = {
        width: `${this.props.width}px`,
        height: `${this.props.height}px`,
        backgroundColor: this.props.color,
    }

  
    render() {
    return (
      <div>
        <div className='Box' style={this.style}></div>
        <button onClick={this.props.removeBox}>X</button>
      </div>
      
    )
  }
}

export default Box