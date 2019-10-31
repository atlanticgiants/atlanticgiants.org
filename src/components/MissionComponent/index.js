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
      ? <Link to={href} className='🏄-row__item 🏄-row__item--with-link' data-slug={href}>
        <span className='🏄__dot'></span>
        {itemText}
      </Link>
      : <div className='🏄-row__item'>
        <span className='🏄__dot'></span>
        {itemText}
      </div>
  }
  render() {
    const {title} = this.props.content != null && this.props.content[0]
    return (
      <article style={this.props.style}>
        <div className='🏄'>
          <div className='🏄__background-wrapper'>
            <video autoPlay muted loop id="myVideo">
              <source src={videoSrc} type="video/mp4"/>
            </video>
            <div className='🏄__background-wrapper__frontground'></div>
          </div>
          {title && <Row className='🏄__title'>
            <h2>{title}</h2>
          </Row>}
          <div className={`🏄__mission-items ${title ? '' : ' 🏄__mission-items--alone'}`}>
            <Row className='🏄__row 🏄__row--top'>
              {this.renderItem('Criar Consciencia')}
            </Row>
            <Row className='🏄__row 🏄__row--middle'>
              {this.renderItem('Mudar o sistema')}
              {this.renderItem('Fomentar compromisso')}
            </Row>
            <Row className='🏄__row 🏄__row--bottom'>
              {this.renderItem('Apoio na co-criação')}
              {this.renderItem('Amplificar mensagem')}
            </Row>
          </div>
        </div>
      </article>
    )
  }
}

export default MissionComponent;