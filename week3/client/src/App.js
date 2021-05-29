import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import {
  BrowserRouter as Router
} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Section/>
      </Router>
    </div>
  );
}

export default App;
