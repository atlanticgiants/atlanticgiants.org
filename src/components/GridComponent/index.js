// general
import React, { Fragment } from "react";
import './styles.scss'
import { FluidImage } from './../image'
import { Link } from "gatsby"

/*
 custom props:
  - maxWidth: wraps content after maxWidth
  - display: sets tiles display. ex: [1, 2, 1]
*/

const getMaxWidth = (numberOfTiles = 3) =>`${(220 + 30) * numberOfTiles}px`
const getFlexBasis = (display, idx) => {
  if (display == null || display === []) {
    return '0%'
  } else {
    const displayFlexBasis = display.flatMap(item => Array(item).fill(100/item + '%')) // [1, 2, 1] => [100%, 50%, 50%, 100%]
    return displayFlexBasis[idx]
  }
}

class GridComponent extends React.Component {
  render() {
    const customProps = this.props.customProps ? JSON.parse(this.props.customProps) : {}
    const maxWidth = getMaxWidth(customProps && customProps.maxTilesPerRow)
    const display = customProps && customProps.display
    return (
      <article style={this.props.style} className='grid-wrapper'>
        {this.props.title && <h1 className='grid-component-title'> {this.props.title} </h1>}
        <ul className={`grid${display ? ' grid--display' : ''}`} style={{maxWidth}}>
          {this.props.content.map((content, idx) => {
            const gridChild = <Fragment>
              {content.imgSrc ? <FluidImage className={`grid-image ${this.props.mode === 'round' ? ' rounded-image' : ''}`} imgSrcSet={content.imgSrc}/> : <div className='grid-image-wrapper'/>}
              {content.title && <p className='grid-title'>{content.title || ''}</p>}
              {content.subTitle && <p className='grid-sub-title'>{content.subTitle || ''}</p>}
            </Fragment>
            return <li className='grid-item-wrap' style={display ? {flexBasis: getFlexBasis(display, idx), marginLeft: 0, marginRight: 0} : {}}>
              <div className='grid-item'>
                {
                  content.href
                    ? content.target
                      ? <a target={content.target ? content.target : '_self'} rel='noopener noreferrer' href={content.href}>
                          {gridChild}
                        </a>
                      : <Link className='grid-link' to={content.href} data-slug={content.href}>
                          {gridChild}
                        </Link>
                    : <div className='grid-link'> {gridChild} </div>
                }
              </div>
            </li>
            }
          )}
        </ul>

      </article>
    )
  }
}

GridComponent.propTypes = {
};

export default GridComponent;