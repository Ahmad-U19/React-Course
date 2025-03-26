import React, { Component } from 'react'
import updateComponent from './withCounter'
class HoverCount extends Component {
    
  render() {
    const {count, implementcount } = this.props
    return (
      <h2 onMouseOver={implementcount}>
        Hover Count {count} times
      </h2>
    )
  }
}

export default updateComponent(HoverCount)