import React from 'react';
import CardAnimated from './component/Card'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ButtonIcon from './component/ButtonIcon'
import Icon from './component/Icon'
import Menu from './component/Menu'
import Pagination from './component/Pagination'
import {fetchData} from './api/fetchData'


function App() {
  const state = fetchData('https://rickandmortyapi.com/api/character/1')
  console.log(state);
  return (
    <div className="App">
      <Menu />
      <CardAnimated />
      <CardAnimated />
      <Pagination />
    </div>
  );
}

export default App;
