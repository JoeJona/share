import './App.css';
import HomePage from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      {/* <HomePage /> */}
      <Switch>
        <Route path="/register">
          {/* {user ? <HomePage/> : <SignUp/>} */}
          <SignUp/>
        </Route>
        <Route path="/login">
        {/* {user ? <HomePage/> : <SignIn/>} */}
        <SignIn/>
        </Route>
      </Switch>
      <Route path="/share">
          {/* {user ? <HomePage/> : <SignUp/>} */}
          <HomePage/>
        </Route>
    </Router>
  );
}

export default App;
