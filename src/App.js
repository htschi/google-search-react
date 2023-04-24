import './App.css'
import Result from './Result.js'
import { useState } from 'react'
import Axios from 'axios'

function App() {
  let data = []

  // useState
  const [results, setResult] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // click on search
  function onSubmit(e) {
    e.preventDefault()
  }

  // manually filter function
  // function search(str) {
  //   let filteredData = []
  //   let count = 0
  //   setResult(
  //     data.map((e) => {
  //       if (e.title.toUpperCase().includes(str.toUpperCase())) {
  //         filteredData[count] = e
  //         count++
  //         console.log(filteredData)
  //       } else {
  //         if (e.description.toUpperCase().includes(str.toUpperCase())) {
  //           filteredData[count] = e
  //           count++
  //           console.log(filteredData)
  //         } else {
  //           if (e.url.toUpperCase().includes(str.toUpperCase())) {
  //             filteredData[count] = e
  //             count++
  //             console.log(filteredData)
  //           }
  //         }
  //       }
  //     })
  //   )
  //   setResult(filteredData)
  // }

  //get Data from API
  async function search(keyword) {
    let response = await Axios.get(
      'https://project-google-search-api-demo.herokuapp.com/results',
      {
        params: {
          search: keyword,
        },
      }
    )
    setResult(response.data)
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
        {results.length == 0 ? (
          <h2>No Results available</h2>
        ) : (
          results.map((e, i) => (
            <Result
              key={i}
              title={e.title}
              description={e.description}
              url={e.url}
              links={e.links}
            />
          ))
        )}
      </div>
    </div>
  )
}
export default App
