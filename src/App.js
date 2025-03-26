import React, { Component } from 'react'
import HoverCount from './Components/HoverCount'
//import Hero from './Components/Hero'
//import Errorboundary from './Components/Errorboundary'


export default class App extends Component {
  render() {
    return (
      <div>
        <HoverCount />
        {/* <Errorboundary >
          <Hero heroName="SuperMan" />
        </Errorboundary>
        <Errorboundary >
          <Hero heroName="Joker" />
        </Errorboundary> */}
      </div>
    )
  }
}
