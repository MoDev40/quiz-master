import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Playground from "./components/Playground"

 function App() {
 return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/playground" element={<Playground />} />
  </Routes>
  </>
 )
 }

 export default App