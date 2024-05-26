import './App.css'
import  Layout  from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Spiner from './components/Spiner/Spiner';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(refreshUser());
  },[dispatch]);

  return (
    isRefreshing ? <Spiner /> :
    <Layout>
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" /> }/>
        <Route path="/login" element={<RestrictedRoute component ={<LoginPage />} redirectTo="/contacts" /> } />
        <Route path="/contacts" element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />} />
      </Routes>
      </Suspense>
    </Layout>
  )
}

