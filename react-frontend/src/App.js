import './App.css';

import Route from './components/route/route';

import { HashRouter as Router } from 'react-router-dom';



function App() {
  return (
      <Router>
          <div className="App">
              <Route />
          </div>
      </Router>
  );
}

export default App;
