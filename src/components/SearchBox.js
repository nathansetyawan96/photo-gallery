import React, { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
  state = {
    term: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault() // to prevent the webpage to refresh after pressing 'enter'
    this.props.onSubmit(this.state.term)
  }

  render () {
    return (
      <div className='head ui container'>
        <h1>Photo Galleries made by L'Americain using React.js</h1>
        <form onSubmit={this.onFormSubmit} action='ui form'>  
          <div className='ui search'>
            <div className='ui icon input search-box'>
              <input 
                type='text' 
                placeholder='Search photos...' 
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className='search icon' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBox
