import { Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;