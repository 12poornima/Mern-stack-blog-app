import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage"
import LoginPage from "./Components/LoginPage"
import Signup from "./Components/Signup"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<Homepage />} />
        </Routes >
      </BrowserRouter >
    </div>
  )
}

export default App
