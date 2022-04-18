import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import Header from './Pages/Shared/Header/Header/Header';
import Footer from './Pages/Shared/Footer/Footer/Footer';


function App() {
  return (
=======
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <h3>This is a webpage</h3>
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import Header from './Pages/Shared/Header/Header/Header';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
>>>>>>> login
    <div>
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
         <Header></Header>
<<<<<<< HEAD
=======
          <Switch>
          <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
>>>>>>> login
         
          <Footer></Footer>
        </Router>
      </AuthProvider>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> login
    </div>
  );
}

export default App;
