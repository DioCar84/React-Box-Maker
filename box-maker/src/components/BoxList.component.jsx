import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Box from './Box.component'
import NewBoxForm from './NewBoxForm.component';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {boxes: [{width: 200, height: 200, color: 'coral', id: uuidv4()}]}
        this.takeFormInput = this.takeFormInput.bind(this);
    }

    removeBox(id) {
      const newBoxes = this.state.boxes.filter((el) => {
        return(el.id !== id)})
      this.setState({
        boxes: newBoxes
      })
    }

    takeFormInput(box) {
        const newBox = {...box, id:uuidv4()}
        this.setState(st => {
          return {boxes: [...st.boxes, newBox]}
        })
      }
  render() {
    return (
      <div>
        < NewBoxForm takeInput={this.takeFormInput}/>
        {this.state.boxes.map((el) => {
          return(<Box width={el.width} height={el.height} color={el.color} id={el.id} removeBox={() => this.removeBox(el.id)}/>)
        })}
    </div>
    )
  }

}

export default BoxList