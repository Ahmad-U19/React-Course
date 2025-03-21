import React, { Component } from 'react'
import RefsDemo from './Components/RefsDemo'
//import PureComp from './Components/PureComp'
//import MemoComp from './Components/MemoComp'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PureComp />
        <MemoComp name={this.state.name}/> */}
        <RefsDemo />
      </div>
    )
  }
}
