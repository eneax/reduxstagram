import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './components/styles/globalStyles'
import Header from './components/header'
import Single from './components/single'
import PhotoGrid from './components/photoGrid'


class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <Header />
        <Switch>
          <Route exact path='/' component={PhotoGrid} />
          <Route path='/view/:postId' component={Single} />
        </Switch>
      </>
    )
  }
}

export default App
