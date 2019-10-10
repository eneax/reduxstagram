import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './styles/headerStyles'


class Header extends React.Component {
  render() {
    return (
      <div>
        <Logo>
          <Link to='/'>Reduxstagram</Link>
        </Logo>
      </div>
    )
  }
}

export default Header
