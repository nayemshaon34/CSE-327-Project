import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import Header from './Pages/Shared/Header/Header/Header';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
         <Header></Header>
         <Switch>
            <Route exact path="/">
              <Home

              ></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
