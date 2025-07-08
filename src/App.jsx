import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommentsPage from './pages/CommentsPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CommentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;