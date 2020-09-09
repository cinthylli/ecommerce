import React from 'react';
import CardAnimated from './component/Card'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ButtonIcon from './component/ButtonIcon'
import Icon from './component/Icon'
import Menu from './component/Menu'
import Pagination from './component/Pagination'
import Modal from './component/Modal'

function App() {
  return (
    <div className="App">
      <Menu />
      <CardAnimated />
      <CardAnimated />
      <ButtonIcon />
      <Icon />
      <Pagination />
    </div>
  );
}

export default App;
