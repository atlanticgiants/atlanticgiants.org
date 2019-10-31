// general
import React from "react"

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "gatsby"
import './styles.scss'

class VerticalTabs extends React.Component {
  render() {
    return (
      <div style={this.props.style} className='vertical-tabs'>
        <h2 className='vertical-tabs-title'>Iniciativas Previstas</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row style={{margin: 0}}>
            <Col sm={4} className='vertical-tabs-menu'>
              <Nav variant="tabs" className="flex-column vertical-tabs-menu-nav">
                {this.props.content.map((item, idx) =>
                  <Nav.Item className='vertical-tabs-menu-item'>
                    <Nav.Link eventKey={idx}>{item.title}</Nav.Link>
                  </Nav.Item>
                )}
              </Nav>
            </Col>
            <Col sm={8} className='vertical-tabs-content'>
              <Tab.Content>
                {this.props.content.map((item, idx) =>
                  <Tab.Pane className='vertical-tabs-content-item-wrapper' eventKey={idx}>
                    <div className='vertical-tabs-content-item'>
                      {item.text}
                    </div>
                    {item.btnText ?
                      item.btnHref
                        ? <Link className='grid-link' to={item.btnHref} data-slug={item.btnHref}>
                            <button className='vertical-tabs-content-item-btn'>{item.btnText || ''}</button>
                          </Link>
                        : <button className='vertical-tabs-content-item-btn'>{item.btnText || ''}</button>
                      : null
                    }

                  </Tab.Pane>
                )}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default VerticalTabs
