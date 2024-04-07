import './App.css';

import {Route, Routes} from 'react-router-dom';

import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import Home from './views/home/Home';
import Landing from './views/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/home' element= {<Home />}/>
        <Route path = '/detail/:id' element= {<Detail />}/>
        <Route path = '/' element = {<Landing />}/>
        <Route path = '/create' element= {<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
