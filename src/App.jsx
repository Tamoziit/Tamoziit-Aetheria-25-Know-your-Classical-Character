import { Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import HomePage from './pages/HomePage';
import Topbar from './components/Topbar';
import ResultPage from './pages/ResultPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { useEffect } from 'react';
import { syncAllCharactersToLeaderboard } from './utils/populateLeaderboard.js';

function App() {
  useEffect(() => {
    syncAllCharactersToLeaderboard();
  }, []);

  return (
    <div className="App">
      <Topbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </div>
  );
}

export default App;