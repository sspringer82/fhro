import './App.css';
import Form from './Form';
import PersonList from './PersonList';
import PersonProvider from './PersonContext';
import React, { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// NICHT SO MACHEN (IS ALT):
// class App extends React.Component {
//   render() {

//   }
// }
// import Detail from './Detail';
const Detail = React.lazy(() => import('./Detail'));

function App() {
  return (
    <PersonProvider>
      <Suspense fallback={<ClipLoader />}>
        <div>Hallo Welt</div>
        <Router>
          <Switch>
            <Route path="/list">
              <PersonList />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/" exact>
              <Redirect to="/list" />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </PersonProvider>
  );
}

export default App;
