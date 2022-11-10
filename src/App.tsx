import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./config/i18n"
import { AuthProvider } from "./contexts/AuthContext"
import { Home } from "./views/Home"
import { RequireAuth } from "./components/RequireAuth"
import { ModalProvider } from "./contexts/ModalContext"
import Onboarding from "./views/Onboarding"

function App() {

  return (
    <AuthProvider>
      <ModalProvider>
        <div className="App">
          <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element = {<RequireAuth><Home/></RequireAuth>}
            />
          </Routes>
          <Routes>
            <Route 
              path="/login" 
              element = {<Onboarding/>}
            />
          </Routes>
          </BrowserRouter>
        </div>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
