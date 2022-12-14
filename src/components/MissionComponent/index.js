// general
import React from "react"
import './styles.scss'
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row'
import videoSrc from './../../data/films/beach_film.mp4'

class MissionComponent extends React.Component {
  renderItem = (itemText) => {
    const {href} = this.props.content != null && this.props.content[0]
    const missionPage = typeof window !== 'undefined' && window.location.pathname === '/missao'
    return !missionPage && href
      ? <Link to={href} className='π-row__item π-row__item--with-link' data-slug={href}>
        <span className='π__dot'></span>
        {itemText}
      </Link>
      : <div className='π-row__item'>
        <span className='π__dot'></span>
        {itemText}
      </div>
  }
  render() {
    const {title} = this.props.content != null && this.props.content[0]
    return (
      <article style={this.props.style}>
        <div className='π'>
          <div className='π__background-wrapper'>
            <video autoPlay muted loop id="myVideo">
              <source src={videoSrc} type="video/mp4"/>
            </video>
            <div className='π__background-wrapper__frontground'></div>
          </div>
          {title && <Row className='π__title'>
            <h2>{title}</h2>
          </Row>}
          <div className={`π__mission-items ${title ? '' : ' π__mission-items--alone'}`}>
            <Row className='π__row π__row--top'>
              {this.renderItem('Criar Consciencia')}
            </Row>
            <Row className='π__row π__row--middle'>
              {this.renderItem('Mudar o sistema')}
              {this.renderItem('Fomentar compromisso')}
            </Row>
            <Row className='π__row π__row--bottom'>
              {this.renderItem('Apoio na co-criaΓ§Γ£o')}
              {this.renderItem('Amplificar mensagem')}
            </Row>
          </div>
        </div>
      </article>
    )
  }
}

export default MissionComponent;