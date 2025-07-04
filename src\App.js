import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Players from './pages/Players';
import Schedule from './pages/Schedule';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;