import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import './App.css'
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { fetchContacts} from "./redux/contactsOps"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div>
      <h1 className="mainText">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
      
    </div>

  )
}

