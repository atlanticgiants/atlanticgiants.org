// general
import React from "react"
import Bullet from './components/Bullet/index'

class Bullets extends React.Component {
  render() {
    const bullets = this.props.content != null ? this.props.content || [] : []
    const customProps = this.props.customProps ? JSON.parse(this.props.customProps) : {}
    const size = customProps.size || 'normal'
    const title = this.props.title
    return (
      <div style={{textAlign: 'center', ...this.props.style}}>
        {title && <h2>{title}</h2>}
        <ul style={{textAlign: 'left', paddingLeft: '15%', paddingRight: '15%'}}> {/* TODO: make this configurable */}
          {bullets && bullets.map((bulletOptions, idx) => {
            return <Bullet size={size} key={'bulletOption' + idx} text={bulletOptions.text} subContent={bulletOptions.subContent}></Bullet>
          })}
        </ul>
      </div>
    )
  }
}

export default Bullets