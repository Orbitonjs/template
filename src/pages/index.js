import Orbiton, { append } from "orbiton";

function App(props) {
  const style = {
    margin: "0px auto",
    maxWidth: "800px",
    textAlign: "center"
  }
  return (
    <div style={style} >
      <h1>Welcome To <span>Orbiton JS</span>.</h1>
      <p>Edit <code>src/pages/index.js</code></p>
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
append(<App />, root)