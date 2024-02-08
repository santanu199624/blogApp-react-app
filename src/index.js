import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home/Home"
import About from './components/About/About';
import Services from "./components/Services/Services"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import BlogDetails from './components/BlogDetails/BlogDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/blogs",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


