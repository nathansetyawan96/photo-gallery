import React, { Component } from 'react'
import Unsplash from './api/Unsplash';
import SearchBox from './components/SearchBox'
import ImageList from './components/ImageList'
import './App.css'

class App extends Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: term
      },
    })
    this.setState({ images: response.data.results })
  }

  render () {
    return (
      <div>
        <div className='head-back'>
          <SearchBox onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ui container">
          <ImageList images={this.state.images} />
        </div>
        
      </div>
      
    )
  }
}

export default App
