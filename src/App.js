import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/contact" Component={Company}/>
          <Route exact path="/company" Component={Contact}/>
          <Route exact path="/newproject" Component={NewProject}/>
        </Routes>
      </Container>
      
      <p>Footer</p>
    </Router>
  );
}

export default App;
