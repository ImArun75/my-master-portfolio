import { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';



import './App.css';

class App extends Component {
  

  render() {
    
    return (
      
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </BrowserRouter>
        </div>
      
      
    )
  }
}

export default App;
