import Orbiton, { append } from "orbiton";
import "../styles/index.css"

function App(props) {
  const style = {
    margin: "0px auto",
    maxWidth: "800px",
    textAlign: "center"
  }
  return (
    <div className="app">
      <div style={style} >
        <h1>Welcome To the <span className="highlight">Orbiton</span> Template.</h1>
        <p>Edit <code className="codepage">src/pages/index.js</code></p>
        <p>You can visit the <code><a href="https://orbiton.js.org">Official Documentation</a> </code>to Learm Orbiton</p>
      </div>
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
append(<App />, root)