// general
import PropTypes from "prop-types";
import React from "react";
import './styles.scss'
import { FluidImage } from './../image'
import { Link } from "gatsby";

class HomeInfo extends React.Component {
  render() {
    return (
      <article style={this.props.style}>
        {this.props.content.map((item, idx) => {
          return <div className='home-info-grid'>
            {item.imgSrc ? <div className='imgWrapper'><FluidImage className={`home-info-image-wrapper${item.imgOption && item.imgOption === 'plenty' ? '' : ' home-info-image-wrapper--round'}`} imgSrcSet={item.imgSrc}/></div> : <div className='home-info-image-wrapper'/>}
            <div className={!!(idx % 2) ? 'home-info-text__align-left' : 'home-info-text'}>
              <h1>{item.title || ''}</h1>
              <p>{item.text || ''}</p>
              <Link
                to={item.btnHref}
                data-slug={item.btnHref}
              >
                <button>{item.btnText || ''}</button>
              </Link>
            </div>
          </div>
        })}
      </article>
    )
  }
}

HomeInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  btnHref: PropTypes.string,
  alignLeft: PropTypes.bool,
  imgSrcSet: PropTypes.any
};

export default HomeInfo;