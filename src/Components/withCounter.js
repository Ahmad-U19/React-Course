import React from 'react'

const updateComponent = OriginalComponent =>{
    class newComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          implementcount = () => {
              this.setState(prevState => {
                  return {
                      count: prevState.count+1
                  }
              })
          }
        render(){
            return <OriginalComponent count={this.state.count} implementcount={this.implementcount} />
        }
    }
    return newComponent
}

export default updateComponent