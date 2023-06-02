import Body from './components/Body';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import SidebarContext, { SidebarProvider } from './Contexts/SidebarContext';
import MobileFooter from './components/MobileFooter';
function App() {

  return (
    
    <div className="App">
      {/* <SidebarProvider> */}
      <Body />
      {/* </SidebarProvider> */}
    </div>
  );
}

export default App;
