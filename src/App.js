import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container'
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/projects" Component={Projects}/>
          <Route exact path="/contact" Component={Company}/>
          <Route exact path="/newproject" Component={NewProject}/>
          <Route exact path="/company" Component={Contact}/>
        </Routes>
      </Container>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
