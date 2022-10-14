import { useEffect, useState } from "react"
import {db, getUsers} from "./config/firebase"
import "./config/i18n"
import './App.css'

function App() {
  const [usersList, setUsersList] = useState<User[]>([])
  useEffect( () => {
    // getUsers(db).then( (list: User[]) => {
    //   console.log(list)
    //   setUsersList(list)
    // })
  }, [])
  return (
    <div className="App">
      
    </div>
  )
}

export default App
