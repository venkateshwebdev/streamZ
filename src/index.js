import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import VideoContainer from './components/VideoContainer';
import VideoWatchPage from './components/VideoWatchPage';
import SearchResults from './components/SearchResults';
import { SidebarProvider } from './Contexts/SidebarContext';

const router = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[{
    path:"/",
    element:<VideoContainer />
  },{
    path:"/watch/:id",
    element:<VideoWatchPage />
  },{
    path:"/search/:id",
    element:<SearchResults />
  },{
    path:"/shorts",
    element:<VideoContainer />
  }]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <RouterProvider router={router} />
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
