// general
import React from "react"
import './styles.scss'
import GridComponent from "../GridComponent";

class PoweredBy extends React.Component {
  render() {
    return (
      <div style={this.props.style} className='powered-by'>
        <p className='powered-by__title'>Powered by</p>
        <GridComponent content={this.props.content}></GridComponent>
      </div>
    )
  }
}

export default PoweredBy