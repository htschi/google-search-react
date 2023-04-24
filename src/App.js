import './App.css'
import Result from './Result.js'
import { useState } from 'react'
const axios = require('axios')

function App() {
  let data = [
    {
      title: 'JS Tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'JS Wikipedia',
      description:
        'JS JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      url: 'https://www.wikipedia.com',
      links: [
        {
          title: 'JS for Beginners1',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web1',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'Javascript',
      description:
        'JavaScript.com is a resource for the JavaScript community. You will find resources and examples for JavaScript beginners as well as support for JavaScript ...',
      url: 'https://www.javascript.com',
      links: [
        {
          title: 'JS for Beginners2',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web2',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
  ]

  // useState

  const [results, setResult] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // click on search
  function onSubmit(e) {
    e.preventDefault()
  }

  // filter function
  function search(str) {
    let filteredData = []
    let count = 0
    setResult(
      data.map((e) => {
        if (e.title.toUpperCase().includes(str.toUpperCase())) {
          filteredData[count] = e
          count++
          console.log(filteredData)
        } else {
          if (e.description.toUpperCase().includes(str.toUpperCase())) {
            filteredData[count] = e
            count++
            console.log(filteredData)
          } else {
            if (e.url.toUpperCase().includes(str.toUpperCase())) {
              filteredData[count] = e
              count++
              console.log(filteredData)
            }
          }
        }
      })
    )
    setResult(filteredData)
  }

  return (
    <div>
      {/* Search Menu */}
      <div className="outerbox">
        <img id="logo" src="images/google.png" />
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="search-button" onClick={() => search(searchTerm)}>
            Search
          </button>
        </form>
      </div>
      {/* Amount of Results */}
      <div className="amount-results">
        <span>{results.length} Results</span>
      </div>
      {/* All Search Results */}
      <div className="search-results">
        {results.map((e, i) => (
          <Result
            key={i}
            title={e.title}
            description={e.description}
            url={e.url}
            links={e.links}
          />
        ))}
      </div>
    </div>
  )
}
export default App
