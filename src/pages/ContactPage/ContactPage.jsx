import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn) { 
      dispatch(fetchContacts());
    }
  }, [isRefreshing, isLoggedIn, dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}