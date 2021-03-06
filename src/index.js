import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.scss"
import App from "./App"

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
)
