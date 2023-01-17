import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Components/LoginPage"
import Signup from "./Components/Signup"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<LoginPage />} />
        </Routes >
      </BrowserRouter >
    </div>
  )
}

export default App
