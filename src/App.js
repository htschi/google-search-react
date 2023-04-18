import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'


function App() {
  let data = [{
    title: 'JS Tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'JS Tutorials1',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners1',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web1',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'JS Tutorials2',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners2',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web2',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  ]

  return (
    <div>
      {/* Search Menu */}
      <div className="outerbox">
        <img id="logo" src="images/google.png" />
        <form>
          <input type="text" />
          <button className="search-button">Search</button>
        </form>
      </div>
      {/* Amount of Results */}
      <div className="amount-results">
        <span>{data.length} Results</span>
      </div>
      {/* All Search Results */}
      <div className="search-results">
        {/* Single Search Results - Loop every Object in the Data Array */}
        {data.map((e, i) => (
          <div key={i} className="single-result">
            <span>{e.url}</span>
            <a className="link" href="https://www.w3schools.com/js/">
              <h2>{e.title}</h2>
            </a>
            <p className="regularText">{e.description}</p>
            <ul>
              {/* Loop every property in the data.links */}
              {e.links.map((li, i) => (
                <li key={i} className="listItem">
                  <a href={li.url}>{li.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App