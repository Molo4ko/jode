import React from 'react';
import {
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import { Pages } from '../Pages/Routes';

export default function App() {
  require('./index.styl');

  return (
    <>
      <div className="menu">
        {Pages.map((page) => <Link to={page.link} key={page.code}>{page.title}</Link>)}
      </div>

      <Routes>
        {Pages.map((page) => <Route path={page.link} element={<page.component />} key={page.code} />)}
      </Routes>
    </>
  );
}
