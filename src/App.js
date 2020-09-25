import React from 'react';
import './App.css';
import Navbar from './navBar'
import './Assets/Fonts/Audiowide-Regular.ttf'
import './Assets/Fonts/quick.ttf'
import './Assets/Fonts/PTSans-Regular.ttf'
import './Assets/Fonts/PTSans-BoldItalic.ttf'
import './Assets/Fonts/Audiowide-Regular.ttf'
import './Assets/Fonts/PTSans-Bold.ttf'
import './Assets/Fonts/PTSans-Italic.ttf'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home';
import Blogs from './pages/blogs';

const App = (props) => {
  return (
    <Router>
      <div style={{ flex: 1, height: '100%' }} >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
