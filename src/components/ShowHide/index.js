// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {FirstName: false, LastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({
      FirstName: !prevState.FirstName,
    }))
  }

  onShowLastName = () => {
    this.setState(prevState => ({
      LastName: !prevState.LastName,
    }))
  }

  render() {
    const {FirstName, LastName} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Show/Hide</h1>
        <div className="button-container">
          <div className="button">
            <button
              className="button1"
              onClick={this.onShowFirstName}
              type="button"
            >
              Show/Hide FirstName
            </button>
            {FirstName ? <p className="paragraph"> Joe </p> : null}
          </div>
          <div className="button">
            <button
              className="button1"
              onClick={this.onShowLastName}
              type="button"
            >
              Show/Hide LastName
            </button>
            {LastName ? <p className="paragraph">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
