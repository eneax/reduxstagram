import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
      </div>
    )
  }
}

export default Header
