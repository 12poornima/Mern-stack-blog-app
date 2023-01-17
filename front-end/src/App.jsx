import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Components/Signup"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="signup" element={<Signup />} />
        </Routes >
      </BrowserRouter >
    </div>
  )
}

export default App
