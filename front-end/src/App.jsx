import { BrowserRouter, Route, Routes } from "react-router-dom"
import BlogAddedPage from "./Components/BlogAddedPage"
import CategoryBlog from "./Components/CategoryBlog"
import Homepage from "./Components/Homepage"
import LoginPage from "./Components/LoginPage"
import Signup from "./Components/Signup"
import SingleBlogPage from "./Components/SingleBlogPage"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="blogadded" element={<BlogAddedPage />} />
          <Route path="singleblogpage" element={<SingleBlogPage />} />
          <Route path="category-blog/:categorey" element={<CategoryBlog />} />
        </Routes >
      </BrowserRouter >
    </div>
  )
}

export default App
