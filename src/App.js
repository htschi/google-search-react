import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div>
      <div className="outerbox">
        <img id="logo" src="images/google.png" />
        <form>
          <input type="text" />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="amount-results">
        <span>37 Results</span>
      </div>
      <div className="search-results">
        <div className="single-result">
          <span>www.3wschool.com</span>
          <a className="link" href="https://www.w3schools.com/js/">
            <h2>JavaScript Tutorial - W3School</h2>
          </a>
          <p className="regularText">JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...</p>
          <ul>
            <li className="listItem">
              <a href="https://www.w3schools.com/js/js_intro.asp">JS Introduction</a>
            </li>
            <li className="listItem">
              <a href="https://www.w3schools.com/js/js_functions.asp">JS Function</a>
            </li>
            <li className="listItem">
              <a href="https://www.w3schools.com/js/js_syntax.asp">JavaScript Syntax</a>
            </li>
          </ul>
        </div>
        <div className="single-result">
          <span>developer.mozilla.org</span>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <h2>JavaScript MDN</h2>
          </a>
          <p className="regularText">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
          </p>
          <ul>
            <li className="listItem">
              <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JS Basics</a>
            </li>
            <li className="listItem">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">JS Guide</a>
            </li>
            <li className="listItem">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">JS Reference</a>
            </li>
          </ul>
        </div>
        <div className="single-result">
          <span>www.wikipedia.com</span>
          <a className="link" href="https://en.wikipedia.org/wiki/JavaScript">
            <h2>JavaScript Wikipedia</h2>
          </a>
          <p className="regularText">JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
          <ul>
            <li className="listItem">
              <a href="https://en.wikipedia.org/wiki/JavaScript#History">JS History</a>
            </li>
            <li className="listItem">
              <a href="https://en.wikipedia.org/wiki/JavaScript#Syntax">JS Syntax</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
