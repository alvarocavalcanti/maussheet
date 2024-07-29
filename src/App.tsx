import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import HelpPage from './components/HelpPage';
import CharacterView from './components/CharacterView';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/new" element={<CharacterForm />} />
        <Route path="/edit/:id" element={<CharacterForm />} />
        <Route path="/view/:id" element={<CharacterView />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
