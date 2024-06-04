import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
};

export default App;
