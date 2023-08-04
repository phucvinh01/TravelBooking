import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Tours from './pages/Tours';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tour from './pages/Tour';
import { useEffect, useContext } from 'react';
import { UserContext } from './Context/UserContext';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
function App() {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loginContext((localStorage.getItem('name')), (localStorage.getItem('token')))
    }
  }, [])

  const { loginContext, user } = useContext(UserContext);
  console.log(document.cookie);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="about" element={ <About /> } />
            <Route path="tours" element={ <Tours /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
            <Route path="tours/:id" element={ <Tour /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
