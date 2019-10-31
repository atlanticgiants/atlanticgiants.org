// general
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import './styles.scss'
import topImageSrc from './../../data/images/atlantic_giants_white_crown.png'
import Text from './../Text'

class DetailTitle extends React.Component {
  render() {
    const {title, text, subTitle} = this.props
    return (
      <Fragment>
        <div className='detailed-title'>
          <img className='title-top-image' alt="title top crown" src={topImageSrc}/>
          <h1>{title}</h1>
          {subTitle && <h4 style={{margin: 0}}>{subTitle}</h4>}
        </div>
        {text && <Text text={text}></Text>}
      </Fragment>
    )
  }
}

DetailTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
}

export default DetailTitle;