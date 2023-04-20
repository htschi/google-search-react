import './App.css'
import Result from './Result.js'

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
      title: 'JS Tutorials1',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
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
      title: 'JS Tutorials2',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
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
        {data.map((e, i) => (
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
