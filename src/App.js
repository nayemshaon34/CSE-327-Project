import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import Header from './Pages/Shared/Header/Header/Header';
import Footer from './Pages/Shared/Footer/Footer/Footer';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
         <Header></Header>
         
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
