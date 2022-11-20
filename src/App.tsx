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
              index
              element = {<RequireAuth><Home /></RequireAuth>}
            />
            <Route 
              path="/login" 
              element = {<Onboarding />}
            />
          </Routes>
          </BrowserRouter>
        </div>
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
