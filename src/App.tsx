import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./views/Login"
import "./config/i18n"
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
