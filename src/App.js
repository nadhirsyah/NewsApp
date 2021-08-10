import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import { ArticleContext } from './Context/ArticleContext';
import Bookmark from './Pages/Bookmark/Bookmark' 
function App() {
  const [myArticle, setMyArticle] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles/>
        <Switch>
          <ArticleContext.Provider value={{ myArticle, setMyArticle}}>
          <Navbar />
          <Route exact path="/">
            <Redirect to="/top" />
          </Route>
          <Route path="/:category">
            <Home />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          </ArticleContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
