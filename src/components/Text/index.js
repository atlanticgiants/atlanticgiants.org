// general
import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

class Text extends React.Component {
  render() {
    const text = this.props.content && this.props.content[0] ? this.props.content[0].text : this.props.text
    return (
      <div style={this.props.style} className='detailed-text'>
        <p className={text.length <= 180 ? ' centered' : ''}>{text}</p>
      </div>
    )
  }
}

Text.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  content: PropTypes.object
}

export default Text