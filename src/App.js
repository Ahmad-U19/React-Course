import React, { Component } from 'react'
import PortalDemo from './Components/PortalDemo'
//import RefsDemo from './Components/RefsDemo'
//import PureComp from './Components/PureComp'
//import MemoComp from './Components/MemoComp'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PureComp />
        <MemoComp name={this.state.name}/> */}
        {/* <RefsDemo /> */}
        <PortalDemo />
      </div>
    )
  }
}
