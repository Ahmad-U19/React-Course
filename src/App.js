import React, { Component } from 'react'
import PureComp from './Components/PureComp'
import MemoComp from './Components/MemoComp'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name:"Ahmad"
    }
  }
  render() {
    return (
      <div>
        <PureComp />
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}
