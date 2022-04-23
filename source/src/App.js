import { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import BitAbode from "./pages/Projects/BitAbode"
import Resume from "./pages/Resume"
import CyclingSafetyVest from "./pages/Projects/CyclingSafetyVest"

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/bit-abode" element={<BitAbode />} />
          <Route path="/projects/cycling-safety-vest" element={<CyclingSafetyVest />} />
        </Routes>
      </BrowserRouter>
    )
  }

}