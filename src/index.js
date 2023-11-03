import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route>
          <Route index path="/" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="news" element={<News />} />
          <Route path="newsDetails" element={<NewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

