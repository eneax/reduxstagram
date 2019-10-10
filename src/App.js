import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './components/styles/globalStyles'
import Header from './components/header'


class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <Switch>
          <Route exact path='/' component={Header} />
        </Switch>
      </>
    )
  }
}

export default App
