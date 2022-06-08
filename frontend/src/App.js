import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import './App.css'
import { render } from '@testing-library/react';
// metamask interaksiyonun olmadan gidememeli
// metamask interaksiyonun olmadan gidememeli
//belki producta record girme sayfası urlden productId alabilir ?
function App() {
  const [sideBarComponent, setSideBarComponent] = useState(null);

  useEffect(() => {
    console.log("window-path: ", window.location.pathname)
          if(window.location.pathname == '/' || window.location.pathname == '/login'
          || window.location.pathname == '/product-search' || window.location.pathname.startsWith('/p/') 
          )
            setSideBarComponent(null)
          else
            setSideBarComponent(<Sidebar/>)
  });

  return (
    <BrowserRouter> 
      <section className="wrapper">
        {sideBarComponent}
        <Content />
      </section>
    </BrowserRouter>
  );
}

export default App;
