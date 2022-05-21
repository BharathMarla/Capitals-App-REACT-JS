import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeState: countryAndCapitalsList[0].id}

  changeSelect = event => {
    this.setState({activeState: event.target.value})
  }

  getCountry = () => {
    const {activeState} = this.state
    const getFiltredCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeState,
    )

    return getFiltredCountry.country
  }

  render() {
    const {activeState} = this.state
    const country = this.getCountry(activeState)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select onChange={this.changeSelect} value={activeState}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="heading">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
