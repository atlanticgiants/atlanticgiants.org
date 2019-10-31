// general
import { Link } from "gatsby";
import React from "react";
import logo from './../../data/images/atlantic-giants-logo.png'
import './style.scss'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
  state = {
    mobileNavOpen: false,
    dropDownOver: false
  }

  toggleDropdownOver = (value) => {
    const valueIsValuable = value !== undefined && (value === true || value === false)
    this.setState(state => ({dropDownOver: valueIsValuable ? value : !state.dropDownOver}))
  }

  onDropdownOver = () => this.toggleDropdownOver(true)
  onDropdownOut = () => this.toggleDropdownOver(false)

  toggleMobileNav = () => {
    const htmlElmt = document.body.parentNode
    const main = document.getElementsByTagName("main")[0]
    const footer = document.getElementsByTagName("footer")[0]
    if(this.state.mobileNavOpen) {
      htmlElmt.style.setProperty('overflow', 'auto')
      main.style.setProperty('opacity', '1')
      footer.style.setProperty('opacity', '1')
    } else {
      htmlElmt.style.setProperty('overflow', 'hidden')
      main.style.setProperty('opacity', '.3')
      footer.style.setProperty('opacity', '.3')
    }
    this.setState((prev) => ({mobileNavOpen: !prev.mobileNavOpen}))
  }

  componentWillUnmount () {
    // reset html element overflow
    document.body.parentNode.style.setProperty('overflow', 'auto')
    document.getElementsByTagName("main")[0].style.setProperty('opacity', '.3')
    document.getElementsByTagName("footer")[0].style.setProperty('opacity', '.3')
  }

  render() {
    const currentPage = typeof window !== 'undefined' ? window.location.pathname : ''
    return (
      <React.Fragment>
        <header className='header'>
          <div className='header-wrapper'>
            <Link to="/" className="logoType">
              <img src={logo} alt={'Atlantic Giants Logo'} />
            </Link>
            <Nav className='header-nav' activeKey="/">
              {this.props.pages.map(tab => {
                if (tab.dropDown) {
                  const activeDropdown = currentPage === tab.href || tab.dropDown.some(dropDownItem => dropDownItem.href === currentPage)
                  return <div>
                    <Nav.Item>
                      <Link className={`header-nav-link${activeDropdown ? ' header-nav-link--active' : '' } dropdown`} to={tab.href} data-slug={tab.href} onMouseOut={this.onDropdownOut} onMouseOver={this.onDropdownOver} id="nav-dropdown"> {tab.title} </Link>
                    </Nav.Item>
                    <div onMouseOut={this.onDropdownOut} onMouseOver={this.onDropdownOver} className='header-dropdown-menu' style={{display: this.state.dropDownOver ? 'block' : 'none'}}>
                      {tab.dropDown.map(dropdown => {
                        const activeSubPage = currentPage === dropdown.href
                        // Não remover a class dropdown-item -> vai buscar ao bootstrap
                        return <Link className={`dropdown-item${activeSubPage ? ' dropdown__item--active' : '' }`} to={dropdown.href} data-slug={dropdown.href}> {dropdown.title} </Link>
                      })}
                    </div>
                  </div>
                }
                const activePage = currentPage === tab.href
                return <Nav.Item>
                  <Link className={`header-nav-link${activePage ? ' header-nav-link--active' : '' }`} to={tab.href} data-slug={tab.href}> {tab.title} </Link>
                </Nav.Item>
              })}
            </Nav>
            <button onClick={this.toggleMobileNav} type="button" className="header-nav-button SideNav-MenuButton-module--menu-button--1QeY5 p-0 d-md-none ml-3 btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg></button>
            <Nav className={`header-nav-mobile ${this.state.mobileNavOpen ? 'header-nav-mobile-open' : ''}`}>
              {this.props.pages.map(tab => {
                if (tab.dropDown) {
                  return <div>
                    <Nav.Item>
                      <Link className='header-nav-link' to={tab.href} data-slug={tab.href}> {tab.title} </Link>
                    </Nav.Item>
                    {tab.dropDown.map(dropdown => {
                      return <Nav.Item>
                        <Link className='nav-sub-item header-nav-link' to={dropdown.href} data-slug={dropdown.href}> {dropdown.title} </Link>
                      </Nav.Item>
                    })}
                  </div>
                }
                return <Nav.Item>
                  <Link className='header-nav-link' to={tab.href} data-slug={tab.href}> {tab.title} </Link>
                </Nav.Item>
              })}
            </Nav>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
  