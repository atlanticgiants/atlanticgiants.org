// general
import React from "react"
import './styles.scss'

class Bullet extends React.Component {
  render() {
    return <li className='bullet'>
      <div className='bullet__main'>
        <span className={`material-icons bullet__main__icon${this.props.size === 'big' ? ' bullet__main__icon--big' : ''}`}>done</span>
        {this.props.text}
      </div>
      {this.props.subContent && this.props.subContent.map(item => {
        return <div className='bullet__sub-content'>{item.text}</div>
      })}
    </li>
  }
}

export default Bullet