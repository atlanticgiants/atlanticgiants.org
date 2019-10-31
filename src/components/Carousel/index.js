// general
import React from "react"
import BootstrapCarousel from 'react-bootstrap/Carousel'
import { FluidImage } from './../image'
import './styles.scss'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Carousel extends React.Component {
  state = {
    index: 0,
    direction: null,
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    })
  }

  render() {
    const { index, direction } = this.state;
    return (
      <BootstrapCarousel
        style={this.props.style}
        className={`carousel${this.props.content.length <= 1 ? ' carousel--one-img' : ''}`}
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        >
        {this.props.content.map((config, idx) => {
          return <BootstrapCarousel.Item>
            {config.imgSrc ? <FluidImage className='d-block w-100 carousel-img-wrapper' alt={`Carousel Image ${idx + 1}`} imgSrcSet={config.imgSrc}/> : <div className='carousel-item--no-image'/>}
            <BootstrapCarousel.Caption>
              <h2 style={config.color ? {color: config.color} : {}}>{config.title}</h2>
              <p style={config.color ? {color: config.color} : {}}>{config.text}</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        })}
      </BootstrapCarousel>
    )
  }
}

export default Carousel
