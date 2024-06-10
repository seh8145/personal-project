import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './views/review'; // 올바른 파일 경로 및 이름 확인
import HomePage from './views/index'; // 올바른 파일 경로 및 이름 확인

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;