import { observer } from 'mobx-react-lite';
import './App.scss';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import { data } from './store/Data';
import { picture } from './store/Pictures';

const App = observer(() => {
  useEffect(() => {
    data.theme ? (document.body.style.backgroundColor = '#fff') : (document.body.style.backgroundColor = '#000');
  }, [data.theme]);

  return (
    <div>
      <div className="App">
        <Home />
      </div>
    </div>
  );
});

export default App;
