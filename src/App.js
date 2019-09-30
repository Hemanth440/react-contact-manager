import React from 'react';
import './App.css';
import HeaderComponent from './components/structure/header/header.component';
import ContainerComponent from './components/structure/container/container.component';

const App = ({ children }) => <div className="App">
  <HeaderComponent />
  <ContainerComponent view={children} />
</div>
export default App;
