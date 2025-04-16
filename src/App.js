import { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Context from './context/reactContext'

import './App.css';

class App extends Component {
  state = {
    activePage: '/'
  }


  changeActivePage = path => {
    this.setState({activePage : path})
  }


  render() {
    const {activePage} = this.state
    console.log(activePage)
    return (
      <Context.Provider
        value = {{
          activePage,
          changeActivePage: this.changeActivePage
        }}
      >
        
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/education" element={<Education />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      
      </Context.Provider>
    )
  }
}

export default App;
