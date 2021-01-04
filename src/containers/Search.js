import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';


const API_URL = 'http://api.tvmaze.com/search/shows'


class Search extends Component {
  state = {
    error: false,
    loading: false,
    query: '',
    data: []
  }


getInfo = async val => {
    this.setState({ loading: true });
    const res = await axios(
        `${API_URL}?q=${this.state.query}`
    );
    const data = await res.data;

    for(let i = 0; i < (data.length - 1); i++)
    {
      this.state.data.push(data[i])
    }

    this.setState({loading: false });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
      data: []
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        //  this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        //  this.hideDropdown()
      }
    })
  }

 

  render() {
    return (
      <div>
        <div class="box">
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
           // onChange={this.handleInputChange}
          />
          <button className= "button Search" onClick={this.handleInputChange}>
          Search
        </button>
        </div>
        
        
        {this.state.data.map((member, index) => (
          <div>
            <h2>{member.show.name}</h2>
            <p>Score: {member.score}</p>
            <p>Type: {member.show.type}</p>
            <div className="content" dangerouslySetInnerHTML={{__html: member.show.summary}}></div>
          </div>
          
          
        ))}
      </div>
    )
  }
}

export default Search